import User from "../models/UserModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

///////user register
export const register =async(req,res)=>{
    try{
     const {email,password} = req.body;
     if(!email || !password) {
      return res.status(400).json("All fields are required");
     }
     const existingUser = await User.findOne({email});
     if(existingUser){
        return res.status(400).json("Email already exists");
     }
     const hashedPassword = await bcrypt.hash(password,10);
     req.body.password = hashedPassword;
     const newUser = await User.create(req.body);
     res.status(201).json("user created successfully");
    }
    catch(error)
    {
      res.status(500).json({message:error.message}); 
    }
};
/////login user

export const loginUser = async(req,res)=>{
  try{
  const {email,password}= req.body;
  if(!email || !password){
    return res.status(400).json("All fields are required");

  }
  const user = await User.findOne({email});
  if(!user){
return res.status(400).json("user not found");
  }
 //check password
 const verifyPassword = await bcrypt.compare(password,user.password);
 if(!verifyPassword){
  res.status(401).json({message:"invalid password"})
 }
 ////CRAETE TOKEN 
 const token =jwt.sign({id:user._id,useremail:user.email},process.env.SECRET)
/////SAVE COOKIE
res.cookie("token",token,{
    httpOnly: true,
     secure: true,        // REQUIRED for production
     sameSite: "none",   // REQUIRED for cross-site cookies
});
res.status(201).json({message:"login successfully",
  token :token,
  user:{id:user_id,useremail:user.email}
});
}
  catch(error){
    res.status(500).json({message:error.message});
  }
}
