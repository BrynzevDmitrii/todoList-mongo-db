import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";
import { PostSkeleton } from "../RemvUpgrd/Skeleton";
import { RemvUpgrd } from "../RemvUpgrd";
import allList from "../../store/allList";


export const ListItems = observer(() => {
  const [reload, setReload] = useState(0);
  const [hover, setHover ] = useState(false)


  useEffect(() => {
    allList.fetchLists()
  },[reload]);

  const isCheck=(reloaded)=>{
    setReload(reloaded)
  }

  const hendlerOver=()=>{
    setHover(true)
  }

  const handlerOut=()=>{
    setHover(false)
  }

  return (
    <>
      {allList.data.length ? 
      allList.data.map((i,indx) => {
        return (
          <ul key={i.indx + i.title} className={styles.df} id={i.id} onMouseOver={()=>hendlerOver()}
          onMouseOut={()=>handlerOut()}>
            <h3 className={styles.title}>{i.title}</h3>
            <Items items={i.items} isCheck={isCheck} />
            <div className={styles.edidSection}>
            <RemvUpgrd isEditable = {true} key={indx}/>
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
