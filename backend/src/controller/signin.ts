import { Application,Request,Response, NextFunction } from "express";
import Authdao from "../dao/authDao";


function signin(req:Request,res:Response,next:NextFunction){
    const Authdata=req.body;
    let authdao= new Authdao();
    let response= authdao.receivedata(Authdata)

    res.send(response);
}
export default signin;