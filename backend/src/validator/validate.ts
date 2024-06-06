import validator from "validator";
class validation{
    public checkusername(username:string): boolean{
       return  validator.isLength(username,{min:8,max:undefined})
    }
    public checkpassword(password:string): boolean{
        return validator.isStrongPassword(password,{minLength:8,minLowercase:1,minSymbols:1,minUppercase:1,minNumbers:1})
    }
}

export default validation;