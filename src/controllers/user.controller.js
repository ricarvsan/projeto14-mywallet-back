import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import { db } from '../database/database.connection.js';

export async function signup(req, res) {
    const {name, email, password} = req.body;

    try {
        const emailInUse = await db.collection('users').findOne({email});
        if(emailInUse) return res.status(409).send('Já existe um usuário com este email cadastrado!')

        const hash = bcrypt.hashSync(password, 10)
        await db.collection('users').insertOne({name, email, password: hash})
        res.status(201).send('Usuário criado com sucesso!')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signin(req, res) {
    const {email, password} = req.body;

    try {
        const user = await db.collection('users').findOne({email});
        if(!user) return res.status(404).send('Usuário não encontrado!');

        const correctPassword = bcrypt.compareSync(password, user.password);
        if(!correctPassword) return res.status(401).send('Senha incorreta!');

        await db.collection('session').deleteMany({userId: user._id});
        const token = uuid();
        await db.collection('session').insertOne({token, userId: user._id});

        res.status(200).send({token, name: user.name})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function logout(req, res) {
    const {token} = res.locals.session;

    try {
        await db.collection('session').deleteOne({token});
        res.status(200).send('Usuário deslogado com sucesso!')

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function logged(req, res) {
    const {token} = res.locals.session;

    try {
        const logged = await db.collection('session').findOne({token});
        if(!logged) res.status(401).send('Usuário não logado!')
        res.status(200).send('Usuário está logado!')

    } catch (err) {
        res.status(500).send(err.message)
    }
}