import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    
    
    try{
            const token = req.headers.authorization?.split(' ')[1]; 
            const payload= jwt.verify(token, process.env.JWT_SECRET)
            /*andiamo a recuperare l utente dal database , se l utente non esiste allora ce err*/
            /*se l utente ce lo inserisco dentro req.user*/
            /*chiamare next per andare al middlewere successivo*/
        }catch(err){
            return res.status(401).json({message: "Invalid token"})
        }
};

export default verifyToken;
