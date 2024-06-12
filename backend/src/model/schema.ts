
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
const productSchema=new mongoose.Schema(
    {
        img:{ type:String, required:true},
        overlayimg:{type:String,required:true},
        category:{ type:String, required:true},
        price: {type:Number, required:true},
        name:{type:String, required: true},
        quantity:{type:Number, required:true},
        orderedQ:{type:Number, required:true},
        addedtocart:{type:Number, required:true}
    },
    {
        collection:'products'
    }
)
export const productmodel=mongoose.model('products',productSchema)
export const usermodel=mongoose.model('users',userSchema)