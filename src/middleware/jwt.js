import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    
    
    try{
            const token = req.headers.authorization?.split(' ')[1];
            const payload= jwt.verify(token, process.env.JWT_SECRET)
        }catch(err){
            return res.status(401).json({message: "Invalid token"})
        }
};

export default verifyToken;
