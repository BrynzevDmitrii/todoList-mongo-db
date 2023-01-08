import { makeAutoObservable, observable } from "mobx";
import axios  from "../axios";

class createList{
    title = '';
    items = [];
    authorId;


    constructor(){
        makeAutoObservable(this)
    }

    setTitle(inputTitle) {
        this.title = inputTitle;
    }

   async setItems(inputItems) {
    await inputItems.forEach(element => {
        this.items.push(element)
        
    });
    }

    setAuthorId(Id) {
        this.authorId = Number(Id);
    }

   async setCreateLists(){
    try {
        const myHeaders = new Headers();

        await axios.post(
            'http://localhost:3001/lists',{
                    "title" : this.title,
                    "items": this.items,
                    "authorId" : this.authorId,
                },
                myHeaders.set("Content-Type", "application/json; charset=utf-8"),
            )
            this.title='';
            this.items=[];
        
    } catch (error) {
        console.log(error);
    }
   
}
}

export default observable( new createList());