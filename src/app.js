import express from 'express';
import cors from 'cors';
import router from './routes/index.routes.js';


// CRIAÇÃO DO APP
const app = express();

// CONFIGURAÇÕES
app.use(cors());
app.use(express.json());
app.use(router)

// LIGAR APP DO SERVER PARA OUVIR REQUISIÇÕES
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`)) 