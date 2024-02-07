
import express from 'express';
import { Registrer } from '../../src/models/registrerSchema.js';

const registrerRouter = express.Router();

// Middleware per il parsing del corpo della richiesta
registrerRouter.use(express.json());

registrerRouter.post('/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        // Verifica che tutti i campi obbligatori siano stati forniti
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // Verifica che le password corrispondano
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Crea una nuova istanza del modello Registrer e salvalo nel database
        const newRegistrer = new Registrer({ name, email, password });
        await newRegistrer.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default registrerRouter;
