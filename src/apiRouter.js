import express from 'express';
import userRouter from"../src/userRouter.js";

const apiRouter= express.Router();

apiRouter.get('/test', (req,res)=>{
    res.status(200).send({message: 'OK!!'});
})

apiRouter.use("/users", userRouter )

export default  apiRouter