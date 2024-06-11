import mongoose from 'mongoose'
import { Response } from 'express'
class mongoconnect {
    public connection (res:Response){
        try{
            mongoose.connect('mongodb://localhost:27017/backendprojectusers')
            // console.log('db connected successfully')
        }catch(err:any){
            console.error(err.message);
            process.exit(1);
            
        }
       
    }
}
export default mongoconnect;