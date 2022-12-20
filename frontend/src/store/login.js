import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";
import { login } from "../midlware/login";

class Login{
    dataLogin = [];
    constructor(){
        makeAutoObservable(this)
    }

   setDate(response) {
    response.forEach(element => {
        this.dataLogin.push(element)
    });
    }

    setLoguot(){
        this.dataLogin = [] ;
        console.log(this.dataLogin);
    }
       

   async fetchLogin(params){

    try {
         const  { data } = await axios.post('/auth/login', params);
         this.setDate(data)
    } catch (error) {
        const response  = await login(params)
        console.log(response);
        this.setDate(response)
        
    }
    }
   
}

export default observable( new Login());