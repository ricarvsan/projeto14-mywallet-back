import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

try {
  await mongoClient.connect()
  console.log('MongoDB conectado!')
} catch (err) {
  // eslint-disable-next-line no-unused-expressions
  ;(err) => console.log(err.message)
}

export const db = mongoClient.db()
