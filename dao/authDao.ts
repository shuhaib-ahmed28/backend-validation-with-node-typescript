import validation from "../validator/validate";


class Authdao{
    public receivedata(authdata:any){
        let validate=new validation();
        if (validate.checkpassword(authdata.password )&&
           (validate.checkusername(authdata.username ))){
            return ("successfully logged in");
        }else{
            return ("check your username and password");
        }
    }
   

}
export default Authdao;