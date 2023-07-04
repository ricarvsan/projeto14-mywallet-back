import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import Joi from 'joi';

// CRIAÇÃO DO APP
const app = express();

// CONFIGURAÇÕES
app.use(cors());
app.use(express.json());
dotenv.config();

// CONEXÃO COM DB
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  console.log('MongoDB conectado!')
} catch (err) {
  err => console.log(err.message)
}

const db = mongoClient.db();

// LIGAR APP DO SERVER PARA OUVIR REQUISIÇÕES
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`)) 