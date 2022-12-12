
import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class allList{
    data = [] ;
    constructor(){
        makeAutoObservable(this)
    }

    setDate(response) {
        response.forEach(element => {
            this.data.push(element)
        });
    }

    removeDate(){
        this.data = []
    }

   async fetchLists(){
     await axios.get('/todo')
        .then(response =>this.setDate(response.data))    
   }
}

export default observable( new allList());