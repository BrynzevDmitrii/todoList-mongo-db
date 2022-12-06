import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Modal, Box } from '@mui/material';

import 'easymde/dist/easymde.min.css';
import styles from './AddList.module.scss';

export const AddList = ({openPopup, closedPopup}) => {
  const imageUrl = '';
  // const [value, setValue] = React.useState('');

  const handleChangeFile = () => {};
  const onClickRemoveImage = () => {};
  // const onChange = React.useCallback((value) => {
  //   setValue(value);
  // }, []);



  // const options = React.useMemo(
  //   () => ({
  //     spellChecker: false,
  //     maxHeight: '400px',
  //     autofocus: true,
  //     placeholder: 'Введите текст...',
  //     status: false,
  //     autosave: {
  //       enabled: true,
  //       delay: 1000,
  //     },
  //   }),
  //   [],
  // );

  return (
<>
    
    <Modal
  open={openPopup}
>
<Box
      className={styles['moduleWindow']}
    >
    <Paper style={{ padding: 30 }}>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
      )}
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок списка дел..."
        fullWidth
      />
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Мой новый список." fullWidth />
      <br />
      <br />
      <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
          fullWidth
        />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
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