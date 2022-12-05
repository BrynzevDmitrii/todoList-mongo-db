
import axios  from "../axios";
import observable from 'mobx'

class allList{
    @observable  data = [];


   async fetchLists(){
     axios.get('/todo')
        .then(response =>this.data.push(response.data))    
   }
}

export default new allList();