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
        this.dataMe.push(response);
    }

 getDate() {
         Boolean(this.dataMe.length);
        }
       
async fetchAuthMe(){
    try { 
        const response = window.localStorage.getItem('token');
    if(response===null){
       this.dataMe=[];
    } else{
        this.setDate(response);
    }
    } catch (error) {
       console.log(error);
        
    }
    }
     
   
}


export default observable( new isAuthMe());