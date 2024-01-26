import jwt from 'jsonwebtoken';
import{User} from "../models/userSchema.js"

const jwtChek = async (req, res, next) => {
    
    
    try{
        const token = req.headers.authorization?.split(' ')[1]; 
            const payload= jwt.verify(token, process.env.JWT_SECRET)
            /*se l utente ce lo inserisco dentro req.user e recupero le info dal database*/
            req.user = await User.findById(payload.id).select("-password")   /*per non visualizzare password .select("-password")*/


            if(!req.user){
                return res.status(404).json({massage:"user not found"})
            }
            
            /*chiamo next per andare al middlewere successivo*/
            next()
            /*andiamo a recuperare l utente dal database , se l utente non esiste allora ce err*/
        }catch(err){
            return res.status(401).json({message: "Invalid token"})
        }
};

export default jwtChek;
