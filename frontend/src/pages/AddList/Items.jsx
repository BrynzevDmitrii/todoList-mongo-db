import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const Items = () =>{
    const[listItems, setListItems] = useState([])


    const hendelKeyPress=(e)=>{
        if(e.key ==='Enter'){
            setListItems([...listItems, {item:e.target.value, isChecked:false}]);
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
};