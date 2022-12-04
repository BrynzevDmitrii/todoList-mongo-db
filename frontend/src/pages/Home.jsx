import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';

import { List } from '../components/List';
import { Button } from '@mui/material';
import { AddList } from './AddList';

export const Home = () => {
  
 const [addList, setAddList] = useState(false);

  const createList=()=>{
    setAddList(true)
  }

  const closedPopup=(closed)=>{
    setAddList(false);
  }
  return (
    <>
    <Button variant="contained" onClick={()=>createList()}>Создать новый список</Button>
     {addList && <AddList openPopup={createList} closedPopup = {closedPopup}/>}
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
      </Tabs>
      <Grid container spacing={2}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <List
              id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'Keff',
              }}
              createdAt={'3 декабря 2022 г.'}
              commentsCount={3}
              isEditable
            />
          ))}
        </Grid>

       
      </Grid>
    </>
  );
};