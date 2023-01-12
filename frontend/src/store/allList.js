
import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class allList{
    data = [] ;
    constructor(){
        makeAutoObservable(this)
    }

   

    setDate(response) {
    console.log(this.data);
    let simpl = []
       response.forEach(element => {
            simpl.push(element)
        });
        if(JSON.stringify(simpl) !== JSON.stringify(this.data)){
           this.data = simpl;
        }
        
        console.log(simpl);
        console.log(this.data);
    }


    removeDate(){
        this.data = []
    }

   async fetchLists(){
     
        const result = await (await axios('http://localhost:3001/lists')).data
        this.setDate(result)
   }
    
   
}

export default observable( new allList());