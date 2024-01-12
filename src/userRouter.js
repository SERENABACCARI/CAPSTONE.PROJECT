import  express  from "express";
//import{User} from"../src/models/userSchema.js";

const userRouter = express.Router();

userRouter.get('/test',async (req, res) => {
    res.status(200).send({ message: 'USERS OK!!' });
   // const user = await User.findById("65a16367a74a75c4a3b1ee66")
   //res.json(user);
})


export default userRouter