import { db } from '../database/database.connection.js'
import dayjs from 'dayjs'

export async function transaction(req, res) {
  const { token } = res.locals.session
  const { type, value, description } = req.body

  try {
    const user = await db.collection('session').findOne({ token })
    await db.collection('transactions').insertOne({
      userId: user.userId,
      type,
      value,
      description,
      date: dayjs().format('DD/MM'),
    })
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function transactions(req, res) {
  const { token } = res.locals.session

  try {
    const user = await db.collection('session').findOne({ token })
    const transactions = (
      await db
        .collection('transactions')
        .find({ userId: user.userId })
        .toArray()
    ).reverse()
    res.status(200).send(transactions)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
