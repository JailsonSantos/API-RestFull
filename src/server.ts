import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

// cria o arquivo que inicaliza as variaveis de ambiente
dotenv.config();

// criar o servidor
const server = express();

// configura a pasta public para ter acessos: ex: imagens
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

// endpoint básico
server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: 'Endpoint nõa encontrado' });
})

// ouvir a porta que vai rodar o servidor
server.listen(process.env.PORT);