import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class Register{
    registerData = [] ;
    constructor(){
        makeAutoObservable(this)
    }

    setRegisterData(response) {
        response.forEach(element => {
            this.registerData.push(element)
        });
    }

   async fetchRegister(params){
     const {data} = axios.post('/auth/register', params);
     return data
   }
}

export default observable( new Register());