import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { Checkbox } from "@mui/material";
import styles from "./ListItems.module.scss";

export const ListItems = (props) => {
  const[isFinished, setIsFinished]=useState(false);
  const [allLists, setAllLists] = useState([])


  useEffect(()=>{axios('http://localhost:3001/lists').then((res)=>setAllLists(res.data))},[isFinished])
   


  const hendelChekced = async (e) => {

    const myHeaders = new Headers();
    const id = e.target.parentElement.id
    const itemId = e.target.id
    console.log(itemId);

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

      {
        allLists.map((i)=>{
          return(<ul
            key={i.indx + i.title}
            className={styles.df}
            id={i.id}
            
        >
          { i.title}
          
            {i.items.map((item,idx)=>{
              return (
              <li 
              id={idx}
              key={idx}
              className={clsx(styles.item, item.isChecked && styles.underline)}
              onClick={(e) => hendelChekced(e)}>
                <Checkbox  
                id={idx}
                key={idx} 
                checked={item.isChecked}  />
                
                {item.item}
                </li>
                
              )
            })}
         
            </ul>
          )
        })
      }
    </>
  );
};
