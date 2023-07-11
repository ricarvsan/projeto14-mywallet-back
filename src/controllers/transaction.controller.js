import { db } from '../database/database.connection.js';

export async function transaction(req, res) {
    const {token} = res.locals.session;
    const {type, value, description} = req.body;

    try {
        const user = await db.collection('session').findOne({token});
        await db.collection('transactions').insertOne({userId: user.userId, type, value, description})
        res.sendStatus(200);

    } catch (err) {
        res.status(500).send(err.message)
    }
}