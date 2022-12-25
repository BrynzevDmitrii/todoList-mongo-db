import { makeAutoObservable, observable } from "mobx";

class isAuthMe{
    dataMe = [];
    constructor(){
        makeAutoObservable(this)
    }

    
setLogoutMe(){
        this.dataMe=[];
    }

 setDate(response) {
        this.dataMe.push(response);
    }

 getDate() {
        return this.dataMe.length;
        }
       
async fetchAuthMe(){
    try { 
        const response = await window.localStorage.getItem('token');
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