import { Box, Button, Modal, Typography } from "@mui/material"

import styles from "./CastomAlert.module.scss"

export const CastomAlert = ({open})=>{
 return(
    <Modal open={open} className={styles["moduleWindow"]}>
        <>
        <Typography align="center" variant="h5">Вы точно хотите удалить весь список?</Typography>
            <Button variant="outlined" color="error">Да, конечно!</Button>
            <Button variant="contained" color="success">О нет что вы!!!!</Button>
        </>
    </Modal>

 )
}