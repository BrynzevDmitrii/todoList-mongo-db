import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class createList{
    title = '' ;
    items = [];
    isChecket = false


    constructor(){
        makeAutoObservable(this)
    }

    setTitle(inputTitle) {
        this.title = inputTitle;
    }

    setItems(inputItems) {
        this.items.push(inputItems);
    }

    setIsChecket(inputChecket) {
        this.isChecket = inputChecket;
    }

   async axiosCreateLists(){
     axios.get('/todo')
        .then(response =>this.setDate(response.data))    
   }
}

export default observable( new createList());