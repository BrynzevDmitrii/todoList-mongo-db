import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class Register{
    isLoding = true;
    registerData = [];
    constructor(){
        makeAutoObservable(this)
    }

    setRegisterData(response) {
        this.registerData.push(response)
        this.isLoding = false;
    }

    setLoguot(){
        this.registerData = [];
        console.log(this.registerData);
    }

   async fetchRegister(params){
    this.isLoding = true;
     const  {data} = (await axios.post('/auth/register', params));
     this.setRegisterData(data)
   }
}

export default observable( new Register());