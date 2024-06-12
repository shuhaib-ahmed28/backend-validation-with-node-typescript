import { Application, Request,Response, NextFunction } from "express";
import mongoconnect from "../model/dbdata";
import { productmodel } from "../model/schema";


async function products(req:Request,res:Response){
const findproducts= new mongoconnect();
findproducts.connection(res)
productmodel.find().then(products => res.json(products))
.catch(error=>res.json(error))

}
export default products;