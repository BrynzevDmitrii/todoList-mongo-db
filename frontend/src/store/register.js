import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";
import { register } from "../midlware/register";

class Register{
    registerData = [];
    constructor(){
        makeAutoObservable(this)
    }

    setRegisterData(response) {
        this.registerData.push(response)
    }

    setLoguot(){
        this.registerData = [];
    
    }

   async fetchRegister(params){
    try {
        const  {data} = await axios.post('/auth/register', params);
        this.setRegisterData(data)
        console.log(this.registerData);
    } catch (error) {
        const response = await register(params);
        this.setRegisterData(response.data)
   }
}

}

export default observable( new Register());