import { Application, Request, Response , NextFunction} from "express";
function connecttofrontend(req:Request, res:Response, next:NextFunction){
    res.json({message: 'message from backend'})
}
export default connecttofrontend;