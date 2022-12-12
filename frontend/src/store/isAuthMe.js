import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class isAuthMe{
    dataMe = [];
    constructor(){
        makeAutoObservable(this)
    }

    
setLogoutMe(){
        this.dataMe=[];
    }

async setDate(response) {
    let date = await response;
    this.dataMe.push(date)
    console.log(this.dataMe);
    }
       
async fetchAuthMe(){
     const { data } = await axios.get('/auth/me');
     this.setDate(data)
    }
   
}

export default observable( new isAuthMe());