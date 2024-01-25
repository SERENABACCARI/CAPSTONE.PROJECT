import express from 'express';
import userRouter from"../src/routes/userRouter.js";
/*import jwtRouter from "../src/routes/jwtRouter.js";*/



const apiRouter= express.Router();

apiRouter.get('/test', (req,res)=>{
    res.status(200).send({message: 'OK!!'});
})

apiRouter.use("/users", userRouter )
/*apiRouter.use(jwtRouter)*/







export default  apiRouter