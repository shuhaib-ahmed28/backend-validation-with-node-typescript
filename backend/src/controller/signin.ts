import { Application,Request,Response, NextFunction } from "express";
import Authdao from "../dao/authDao";
import mongoconnect from "../model/dbdata";
import { usermodel } from "../model/schema";


async function signin(req:Request,res:Response,next:NextFunction){
    // console.log(req.body)
    const finduser=new mongoconnect();
    finduser.connection(res);
        const {email, password }=req.body
        try {
            const user = await usermodel.findOne({email,password})
            if (user){

               return res.json({status:'ok',user: true})
            }else {
                return res.json({status:'user not found', user: false})
            }
          
            
        } catch (error) {
        console.error('user not found', error)
    }
}
        
   
    
    // const Authdata=req.body;
    // let authdao= new Authdao();
    // let response= authdao.receivedata(Authdata)

    // res.json('hey');

export default signin; 