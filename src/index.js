import express from 'express';
import mongoose from 'mongoose';
import list from 'express-list-endpoints';
import { genericError } from './middleware/genericError.js';
import apiRouter from '../src/apiRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();
const port = process.env.PORT || 3020;

server.use(cors())


server.use(express.json());


server.use(genericError);



server.use('/api', apiRouter);

mongoose.connect(process.env.MONGO_URL, )

    .then(() => {
        server.listen(port, () => {
            console.log('🚀 Server in ascolto sulla porta: ' + port);
            console.log(list(server));
        });
    })
    .catch((error) => {
        console.error('Errore durante la connessione al database:', error);
    });
