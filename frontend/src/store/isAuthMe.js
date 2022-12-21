import { makeAutoObservable, observable } from "mobx";
import axiosBakcend  from "../axios";

class isAuthMe{
    dataMe = [];
    constructor(){
        makeAutoObservable(this)
    }

    
setLogoutMe(){
        this.dataMe=[];
    }

async setDate(response) {
    await  response
        this.dataMe.push(response)
    }

 getDate() {
         Boolean(this.dataMe.length);
        }
       
async fetchAuthMe(){
    try {
        const { data } = await axiosBakcend.get('/auth/me');
        this.setDate(data)
        console.log('sucsees' ,data);
    } catch (error) {
        const response = window.localStorage.getItem('token');
        console.log(response);
        if(response===null){
           console.log('not token');
        } else{
            this.setDate(response)
        }
        
    }
    }
     
   
}


export default observable( new isAuthMe());