import React, { useRef } from "react";
import clsx from "clsx";
import styles from "./ListItems.module.scss";
import { Checkbox } from "@mui/material";

export const ListItems = (props) => {

  const idRef = useRef();

const hendelChekced=(e)=>{
console.log(idRef);
}


  return (
<>
            {props.title}
            <ul key={props.id + props.title} className={styles.df}>
        {props.item.map((i,indx) => {
          return (
              <li key={props.id+indx}
                ref ={idRef}
                className={clsx(
                  styles.item,
                  i.isChecked && styles.underline
                )}
              >
                <Checkbox checked = {i.isChecked} onClick = {(e)=>hendelChekced(e)}/>
                &nbsp; {i.item}
              </li>  
          );
        })}
          </ul>
    
    </>
  );
};
