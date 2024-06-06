import express from "express";
import signin from "../controller/signin";
import signup from "../controller/signup";
import connecttofrontend from "../controller/frontendconnect";
const router=express.Router();


router.post('/login',signin )
router.post('/signup',signup )
router.get('/api', connecttofrontend)

export default router;