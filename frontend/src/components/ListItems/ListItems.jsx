import React, { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";
import { PostSkeleton } from "../RemvUpgrd/Skeleton";


export const ListItems = observer(() => {
  const [allLists, setAllLists] = useState([]);
  const [reload, setReload] = useState(0);


  useEffect(() => {
    axios("http://localhost:3001/lists").then((res) => setAllLists(res.data));
  },[reload,allLists]);

  const isCheck=(reloaded)=>{
    setReload(reloaded)
  }

  return (
    <>
      {allLists.length ? 
      allLists.map((i) => {
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
