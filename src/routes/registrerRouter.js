
import express from 'express';
import {Registrer} from '../../src/models/registrerSchema.js'


const registerRouter = express.Router();

registerRouter.post('/Registrer', async (req, res) => {
    const { name, email, password , confermaPassword} = req.body;

    try {
        const newRegistrer = new Registrer({ name, email, password, confermaPassword });
        await newRegistrer.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})









export default registerRouter