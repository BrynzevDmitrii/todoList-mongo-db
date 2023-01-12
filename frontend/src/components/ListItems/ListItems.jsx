import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";
import { PostSkeleton } from "../RemvUpgrd/Skeleton";
import allList from "../../store/allList";


export const ListItems = observer(() => {
  const [reload, setReload] = useState(0);


  useEffect(() => {
    allList.fetchLists()
  },[reload]);

  const isCheck=(reloaded)=>{
    setReload(reloaded)
  }

  return (
    <>
      {allList.data.length ? 
      allList.data.map((i) => {
        return (
          <ul key={i.indx + i.title} className={styles.df} id={i.id}>
            <h3 className={styles.title}>{i.title}</h3>
            <Items items={i.items} isCheck={isCheck} />
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
