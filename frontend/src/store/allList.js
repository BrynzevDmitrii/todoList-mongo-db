
import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class allList{
    data = [] ;
    constructor(){
        makeAutoObservable(this)
    }

   async setDate(response) {
      response.forEach(element => {
            this.data.push(element)
            console.log(this.data);
        });
    }

    removeDate(){
        this.data = []
    }

   async fetchLists(){
     
    try {
        await axios.get('/todo')
        .then(response =>this.setDate(response.data))    
        console.log(this.data);
    } catch (error) {
        const result = await (await axios('http://localhost:3001/lists')).data
        this.setDate(result)
        console.log(error);
    }
   }
}

export default observable( new allList());