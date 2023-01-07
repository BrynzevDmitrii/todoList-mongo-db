import { makeAutoObservable, observable } from "mobx";
// import axios  from "../axios";

class createList{
    title = '' ;
    items = [
        {
        item:'',
        isChecked:false
        },
    ];
    authorId = 2


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

//    async axiosCreateLists(){
//      axios.set('/todo')
//         .then(response =>this.setDate(response.data))    
//    }
}

export default observable( new createList());