import TextField from '@mui/material/TextField';


import { observer } from 'mobx-react';
import { useState } from 'react';
import createList from '../../store/createList';

export const Items = observer(() =>{
    const[listItems, setListItems] = useState([])

    const hendelKeyPress=(e)=>{
        if(e.key ==='Enter'){
          e.preventDefault()
            setListItems([...listItems, {item:e.target.value, isChecked:false}]);
            createList.setItems(listItems)
            e.target.value = ''
            
        }
        
    }

    
console.log(listItems);
    return(
        <>
        <TextField
          multiline
          variant="filled"
          fullWidth
          onKeyPress={(e)=>hendelKeyPress(e)}
        />
      <br />
      <br />
      <br />
      <ul>
        {
        listItems.length?
        listItems.map((item, ind)=>{
          return(
            <li key={ind}>
              {item.item}
            </li>
          )
        }):""
        }
      </ul>
        
      </>
    )
});