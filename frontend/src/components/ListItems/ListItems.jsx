import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";
import { PostSkeleton } from "../RemvUpgrd/Skeleton";
import { RemvUpgrd } from "../RemvUpgrd";
import allList from "../../store/allList";
import { remove } from "../../midlware/remove";
import { CastomAlert } from "../castomAlert/CastomAlert";



export const ListItems = observer(() => {
  const [reload, setReload] = useState(0);
  const [alert, setAlert ]= useState(false);


  useEffect(() => {
    allList.fetchLists()
  },[reload]);

  const isCheck=(reloaded)=>{
    setReload(reloaded)
  }

  const removeList = async (id) => {
    setAlert(true)
     
    //  await remove(id)
  }

  return (
    <>
      {allList.data.length ? 
      
      allList.data.map((i,indx) => {
        return (
          <ul key={i.indx + i.title} className={styles.df} id={i.id}>
            <h3 className={styles.title}>{i.title}</h3>
            <Items items={i.items} isCheck={isCheck} />
            <div className={styles.edidSection}>
            <CastomAlert open={alert} />
            <RemvUpgrd
            isEditable = {true} 
            key={indx}  
            id={i.id}
            onClickRemove={removeList}
            />          
            </div>
    
          </ul>
          
        );
      })
      :
      <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      </>
      
      
      }
    </>
  );
});
