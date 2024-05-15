import express from "express";
import signin from "../controller/signin";
import signup from "../controller/signup";
const router=express.Router();


router.post('/login',signin )
router.post('/signup',signup )
router.get('/login',signin )
router.get('/signup',signup )



export default router;