import express from "express";
import { User } from "../src/models/userSchema.js";

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    res.status(200).send({ message: 'USERS OK!!' });
    // const user = await User.findById("65a16367a74a75c4a3b1ee66")
    // res.json(user);
});

userRouter.post('/id', async (req, res) => {
    const userId = req.body.userId; // Assumi che il client passi l'ID nel corpo della richiesta
    const user = await User.findById(userId);
    res.json(user);
});

userRouter.put('/body', async (req, res) => {
    const userUpdate = await updateUser(req.body); // Assumi che il client passi i dati utente nel corpo della richiesta
    res.json(userUpdate);
});

userRouter.delete('/id', async (req, res) => {
    const userId = req.body.userId; // Assumi che il client passi l'ID nel corpo della richiesta
    const userDelete = await deleteUser(userId);
    res.json({ message: 'Cancellazione avvenuta' });
});

export default userRouter;
