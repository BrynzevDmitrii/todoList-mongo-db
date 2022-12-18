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
    await  response
        this.dataMe.push(response)
    console.log(this.dataMe);
    }

 getDate() {
         Boolean(this.dataMe.length);
        // // eslint-disable-next-line no-unused-expressions
        // isAuth ? 'true' : console.log('нет данных в AuthMe');

        }
       
async fetchAuthMe(){
     const { data } = await axios.get('/auth/me');
     this.setDate(data)
     console.log('sucsees' ,data);
    }
   
}

export default observable( new isAuthMe());