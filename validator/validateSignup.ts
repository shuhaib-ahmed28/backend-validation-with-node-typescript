import validator from "validator";
import { locales } from "validator/lib/isIBAN";

class signupvalidation{
    public checkname(name:string):boolean {
        return validator.isLength(name, {min: 8, max:undefined})
    }
    public checkemail(email:string):boolean{
        return validator.isEmail(email,{require_tld:true})
    }
    public checknumber(mobileno:string):boolean{
        
        return validator.isMobilePhone(mobileno)
    }
    public checkpassword(password:string):boolean{
        return validator.isStrongPassword(password, {minLength:8,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1})
    }
}
export default signupvalidation;