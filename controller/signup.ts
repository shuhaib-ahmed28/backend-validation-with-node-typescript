import { Application,Request,Response,NextFunction } from "express";
import Authsignup from "../dao/signupdao";

function signup(req:Request,res:Response,next:NextFunction){
    const Authsignupdata=req.body
    let authsigup= new Authsignup()
    let response=authsigup.receivesignupdata(Authsignupdata)
    res.send(response)
}
export default signup;