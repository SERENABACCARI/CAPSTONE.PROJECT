import express from 'express';

const apiRouter= express.Router();

apiRouter.get('/api', (req,res)=>{
    res.status(200).send({message: 'OK!!'});
})


export default  apiRouter