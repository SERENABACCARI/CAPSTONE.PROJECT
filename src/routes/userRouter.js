import express from "express";
import {User} from '../../src/models/userSchema.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const userRouter = express.Router();

/*POST con BCRYPT*/

userRouter.post('/', async(req,res)=>{
    const password= await bcrypt.hash(req.body.password,10)                        ///hash della password//
    const newUser = await User.create({...req.body,password,})
    res.status(201).json(newUser)
})



/*POST LOGIN CON COMPARE*/
/*AUTENTICAZIONE*/

userRouter.post('/login', async(req,res)=>{
 const {email,password} = req.body

 const user= await User.findOne({email})

 if (!user){
    return res.status(404).json({message:"User not found"})                         /*COMPARE*/
 }
const isPasswordCorrect = await bcrypt.compare(password,user.password)

if (!isPasswordCorrect){
    return res.status(404).json({message:"Password incorrect"})
}

/*restituisco il token*/

const payload= { id: user.id}

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); /*JWT_SECRET*/
        

res.status(200).json({message:"token"})


})




/*GET*/
userRouter.get('/', async (req, res) => {
    const user = await User.find({})
    res.status(201).json({ message: 'USERS LIST OK!!' });
    
});

/*GET*/
userRouter.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id); 
    if(!user) return res.status(404).json({ message: 'user not found' });
    
    res.status(200).json(user);
});

/*PUT*/
userRouter.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.boby,{new:true}); 
    res.status(200).json(user);
});

/*DELETE*/
userRouter.delete('/id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(404).json({ message: 'delete' });
});

export default userRouter;
