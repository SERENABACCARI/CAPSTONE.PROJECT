import express from 'express';
import apiRouter from '../src/apiRouter.js';
import mongoose from 'mongoose';

const server = express();

server.use(express.json());

const port = 3030;

server.use("/api", apiRouter);

mongoose.connect("", { 
    
   
}).then(() => {
    server.listen(port, () => {
        console.log('🚀 Server listening to port: ' + port);
    });
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});
