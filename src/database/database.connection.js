import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// CONEXÃO COM DB
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log('MongoDB conectado!');
} catch (err) {
  err => console.log(err.message);
}

export const db = mongoClient.db();