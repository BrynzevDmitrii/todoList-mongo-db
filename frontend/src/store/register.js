import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class Register{
    data = [] ;
    constructor(){
        makeAutoObservable(this)
    }

    setDate(response) {
        response.forEach(element => {
            this.data.push(element)
        });
    }

   async fetchLists(){
     axios.get('/todo')
        .then(response =>this.setDate(response.data))    
   }
}

export default observable( new Register());