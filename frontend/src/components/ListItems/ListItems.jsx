import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { Checkbox } from "@mui/material";
import styles from "./ListItems.module.scss";

export const ListItems = (props) => {
  const[isFinished, setIsFinished]=useState();


  useEffect(()=>{},[])
   

  const idRef = useRef(null);

  const hendelChekced = async (e) => {
   
    const myHeaders = new Headers();
    const id = idRef.current.id
    const itemId = e.target.id

    const list = await (await axios.get(`http://localhost:3001/lists/${id} `)).data

    const snapShot = structuredClone(list)
    setIsFinished(snapShot.items[itemId].isChecked)
    const modSnap = snapShot.items[itemId].isChecked=!isFinished
  
   
    await axios.put(`http://localhost:3001/lists/${id} `,
    snapShot,
    myHeaders.set('Content-Type','application/json; charset=utf-8'),
    )
};

  return (
    <>
      {props.title}
      <ul
        key={props.id + props.title}
        className={styles.df}
        id={props.id}
        ref={idRef}
      >
        {props.item.map((i, indx) => {
          return (
            <li
              id={indx}
              key={indx}
              className={clsx(styles.item, i.isChecked && styles.underline)}
              onClick={(e) => hendelChekced(e)}
             
            >
              <Checkbox checked={i.isChecked}
              
                />
               {i.item}
            </li>
          );
        })}
      </ul>
    </>
  );
};
