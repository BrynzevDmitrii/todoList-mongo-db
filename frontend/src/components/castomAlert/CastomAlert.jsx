import { Box, Button, Modal, Typography } from "@mui/material"

import styles from "./CastomAlert.module.scss"

export const CastomAlert = ({open, onClosed, handleDelited })=>{
 return(
    
    <Modal open={open} hideBackdrop={true} disableEscapeKeyDown={true}>
        <Box className={styles.moduleWindow}>
        <Typography padding="10px" variant="h5">Вы точно хотите удалить весь список?</Typography>
        <div className={styles.buttonBox} >
            <Button variant="contained" color="success" onClick={()=>onClosed()}>О нет, что вы !!!!</Button>
            <Button variant="outlined" color="error" onClick={()=>handleDelited()}>Да, конечно !</Button>
        </div>   
        </Box>
    </Modal>
   
 )
}