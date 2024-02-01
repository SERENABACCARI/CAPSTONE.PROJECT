import express from "express";
import {Registrer} from '../../src/models/registrerSchema.js'




const registerRouter = express.Router();

/* POST con BCRYPT per la registrazione */
registerRouter.post('/', async (req, res) => {
    try {
        const { nome, email, password, confermaPassword } = req.body;

        // Verifica che la password e la confermaPassword siano uguali
        if (password !== confermaPassword) {
            return res.status(400).json({ message: "La password e la confermaPassword non corrispondono" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Registrer.create({
            nome,
            email,
            password: hashedPassword
        });

        const { password: _, __v, ...newUserWithoutPassword } = newUser.toObject();
        res.status(201).json(newUserWithoutPassword);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Errore durante la registrazione' });
    }
});



export default registerRouter;