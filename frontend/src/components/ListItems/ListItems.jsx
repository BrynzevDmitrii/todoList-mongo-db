import React, { useEffect, useState } from "react";
import axios from "axios";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";

export const ListItems = () => {
  const [allLists, setAllLists] = useState([]);
  const [reload, setReload] = useState()

  useEffect(() => {
    axios("http://localhost:3001/lists").then((res) => setAllLists(res.data));
  },[reload]);

  const isCheck=(reloaded)=>{
    setReload(reloaded)
  }

  return (
    <>
      {allLists.map((i) => {
        return (
          <ul key={i.indx + i.title} className={styles.df} id={i.id}>
            {i.title}
            <Items items={i.items} isCheck={isCheck} />
          </ul>
        );
      })}
    </>
  );
};
