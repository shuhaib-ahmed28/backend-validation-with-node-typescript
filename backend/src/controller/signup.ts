import { Application,Request,Response,NextFunction } from "express";
import Authsignup from "../dao/signupdao";
import mongoconnect from "../model/dbdata";
import { usermodel } from "../model/schema";

async function signup (req:Request,res:Response,next:NextFunction){
    
    console.log(req.body)
    const dbconnect= new mongoconnect();
     dbconnect.connection(res);
    try{
        const user =await usermodel.create(req.body);
        console.log('user created:' ,user);
        res.send(user)
    }catch(error){  
        console.error('Error while creating user:', error)
    }

    // const Authsignupdata=req.body
    // let authsigup= new Authsignup()
    // let response=authsigup.receivesignupdata(Authsignupdata)
    // console.log(req.body)
    // res.send(response)
}
export default signup;