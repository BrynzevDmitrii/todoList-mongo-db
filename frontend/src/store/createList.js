import { makeAutoObservable } from "mobx";

class addNewList{
    statePopup = false;
    constructor(){
        makeAutoObservable(this)
    }

    openPopup(){
        this.statePopup = true;
    }

    closedPopup(){
        this.statePopup = false;
    }

}

export default new addNewList();