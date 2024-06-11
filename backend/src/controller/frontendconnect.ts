import { Application, Request, Response , NextFunction} from "express";
function connecttofrontend(req:Request, res:Response, next:NextFunction){
    console.log('api connected', req.body)
    res.json({message: 'message from backend'})
}
export default connecttofrontend;