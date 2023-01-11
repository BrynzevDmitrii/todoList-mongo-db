import TextField from '@mui/material/TextField';


import { observer } from 'mobx-react';
import createList from '../../store/createList';

export const Items = observer(() =>{

    const hendelKeyPress=async(e)=>{
        if(e.key ==='Enter'){
          e.preventDefault()
            createList.setItems([{item:e.target.value, isChecked:false}])
            e.target.value = ''
            
        }
        
    }

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
        createList.items.length?
        createList.items.map((item, ind)=>{
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