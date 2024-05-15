import signupvalidation from "../validator/validateSignup";
class Authsignup{
    public receivesignupdata(signupdao:any){
        let signupvalidate= new signupvalidation;
        if (signupvalidate.checkname(signupdao.name)&& 
            signupvalidate.checkemail(signupdao.email)&& 
            signupvalidate.checkpassword(signupdao.password)&&
            signupvalidate.checknumber(signupdao.mobileno)){
            return ('succcefully registered')
        }else {
            return ('fill correct values')
        }
    }
}
export default Authsignup;