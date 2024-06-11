import express from "express";
import signin from "../controller/signin";
import signup from "../controller/signup";
import connecttofrontend from "../controller/frontendconnect";
import cors from 'cors';
const router=express.Router();

router.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))


router.post('/login',signin )
router.post('/signup',signup )
router.post('/api', connecttofrontend)

export default router;