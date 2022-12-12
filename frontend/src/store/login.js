import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class Login{
    dataLogin = [];
    constructor(){
        makeAutoObservable(this)
    }

   setDate(response) {
    this.dataLogin.push(response)
    }

    setLoguot(){
        this.dataLogin = [] ;
        console.log(this.dataLogin);
    }
       

   async fetchLogin(params){
     const  { data } = await axios.post('/auth/login', params);
     this.setDate(data)
    }
   
}

export default observable( new Login());