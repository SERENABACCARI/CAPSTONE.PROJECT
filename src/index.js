import express from 'express';
import apiRouter from '../src/apiRouter.js';
import mongoose from 'mongoose';
import list from "express-list-endpoints"

const server = express();

server.use(express.json());

const port = 3030;

server.use("/api", apiRouter);

mongoose.connect(process.env.MONGO_URL).then(() => {
    server.listen(port, () => {
        console.log('🚀 Server listening to port: ' + port);
        console.log(list(server.listen));
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});

