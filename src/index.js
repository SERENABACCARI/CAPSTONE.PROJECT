import express from 'express';
import apiRouter from '../src/apiRouter.js';

const server = express();

server.use(express.json());

const port =3030

server.use("/api", apiRouter);



server.listen(port,()=>{
    console.log(' 🚀Server listening to port: ' + port);
})