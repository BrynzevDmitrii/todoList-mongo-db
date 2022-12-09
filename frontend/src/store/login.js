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
    }
       

   async fetchLogin(params){
     const  { data } = await axios.post('/auth/login', params);
     this.setDate(data)
    //  console.log(this.dataLogin[0].token);
    }
   
}

export default observable( new Login());