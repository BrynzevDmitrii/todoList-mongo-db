import React from "react";
import { observer } from "mobx-react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Modal, Box } from "@mui/material";

import "easymde/dist/easymde.min.css";
import styles from "./AddList.module.scss";
import { Items } from "./Items";
import createList from "../../store/createList";
import allList from "../../store/allList";

export const AddList = observer(({ closedPopup }) => {
  const handelOnChange = (e) => {
    createList.setTitle(e.target.value);
  };

  const heandelSubmit = async () => {
    if(createList.title === ''){
      return alert("Придумайте заголовок")
    }
    if(!createList.items.length){
      return alert("Нет ни одного дела")
    }
    await createList.setAuthorId(window.localStorage.getItem('authorId'))
    createList.setCreateLists()
    allList.getDate()
    closedPopup()
    
  }

  return (
    <>
      <Modal open={true}>
        <Box className={styles["moduleWindow"]}>
          <Paper style={{ padding: 30 }}>
            <br />
            <br />
            <TextField
              classes={{ root: styles.title }}
              variant="standard"
              placeholder="Заголовок списка дел..."
              fullWidth
              onChange={(e) => handelOnChange(e)}
            />
            <br />
            <br />
            <Items />
            <div className={styles.buttons}>
              <Button size="large" variant="contained" onClick={()=>heandelSubmit()}>
                Опубликовать
              </Button>
              <Button size="large" onClick={() => closedPopup()}>
                Отмена
              </Button>
            </div>
          </Paper>
        </Box>
      </Modal>
    </>
  );
});
