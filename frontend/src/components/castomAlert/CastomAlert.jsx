import { Box, Button, Modal, Typography } from "@mui/material"
import { observer } from "mobx-react";
import popupRemove from "../../store/popupRemove";

import styles from "./CastomAlert.module.scss"

export const CastomAlert = observer(({open})=>{
 return(
    
    <Modal open={open} hideBackdrop={true} disableEscapeKeyDown={true}>
        <Box className={styles.moduleWindow}>
        <Typography padding="10px" variant="h5">Вы точно хотите удалить весь список?</Typography>
        <div className={styles.buttonBox}  >
            <Button variant="contained" color="success" onClick={()=>popupRemove.setClosed()}>О нет, что вы !!!!</Button>
            <Button variant="outlined" color="error" onClick={()=>popupRemove.setClosed(true)}>Да, конечно !</Button>
        </div>   
        </Box>
    </Modal>
   
 )
});