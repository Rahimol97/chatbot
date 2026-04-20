import User from '../models/UserModel.js'
import jwt from "jsonwebtoken"

const authmiddleware =async(req,res,next)=>{
    try{
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({message:"Access denied,please login"})
    }
    const verifyToken = jwt.verify(token,process.env.SECRET);
    const user = await User.findById(verifyToken.id).select("-password");
    if(!user){
        res.status(404).json({message:"user not found"})
    }
    req.loggedUser = user;
    next();
}
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
}
export default authmiddleware; 