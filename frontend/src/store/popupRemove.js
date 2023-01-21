import { makeAutoObservable, observable } from "mobx";
import { remove } from "../midlware/remove";



class PopupRemove{

    id ;
    isOpen = false;
    delited = false;
  
    constructor(){
        makeAutoObservable(this)
    }

    setId(id){
        this.id = id
        console.log(id);
      }

    setOpen(){
        this.isOpen = true
    } 
     
    setClosed(del){
        if(del){
            remove(this.id)
        }
        this.isOpen = false;
    }


   
   
}

export default observable( new PopupRemove());
