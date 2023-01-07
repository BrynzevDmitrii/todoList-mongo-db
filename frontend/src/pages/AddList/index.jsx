import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Modal, Box } from '@mui/material';

import 'easymde/dist/easymde.min.css';
import styles from './AddList.module.scss';
import { Items } from './Items';

export const AddList = ({openPopup, closedPopup}) => {
  

  return (
<>
    
    <Modal
  open={true}
>
<Box
      className={styles['moduleWindow']}
    >
    <Paper style={{ padding: 30 }}>
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок списка дел..."
        fullWidth
      />
      <br />
      <br />
      <Items/>
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Опубликовать
        </Button>
          <Button size="large" onClick={()=>closedPopup()}>
              Отмена
              </Button>
      </div>
    </Paper>
    </Box>
    </Modal>
    </>
  );
}