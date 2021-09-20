import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

// cria o arquivo que inicaliza as variaveis de ambiente
dotenv.config();

// criar o servidor
const server = express();

// CORs - configuração pública
server.use(cors());

// CORs - configuração Restrita
/* server.use(cors({
  origin: 'https://resttesttest.com',
  methods: ['GET', 'POST']
}));
 */

// configura a pasta public para ter acessos: ex: imagens
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

// Quando existir um Api dentro da aplicaçao usa dessa forma
// server.use('/api', apiRoutes);

// rotas
server.use(apiRoutes)

// endpoint básico
/* server.use((req: Request, res: Response) => {

}) */

server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: 'Endpoint não encontrado' });
})

// ouvir a porta que vai rodar o servidor
server.listen(process.env.PORT);