
import mongoose, {Schema} from "mongoose";

const userSchema=new mongoose.Schema(
    {
        name: { type:String, required:true},
        email: { type:String, required:true, unique:true},
        password: { type:String, required:true},
    },
    {
        collection:'userData'
    }
)
export const usermodel=mongoose.model('users',userSchema)