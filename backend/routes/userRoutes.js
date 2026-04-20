import express from 'express'
import { register,loginUser} from '../controllers/userController.js'
import authmiddleware from '../middleware/authmiddleware.js'
const router = express.Router();

router.post('/register',register);
router.post('/login',loginUser);

router.get("/me",authmiddleware, (req,res)=>{
    res.json({useremail:req.loggedUser.useremail});
});

router.post("/logout",authmiddleware,(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        secure:true,
        sameSite:"none"
    });
    res.json({message:"looged out successfully "})
});

export default router;