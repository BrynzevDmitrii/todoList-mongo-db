import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Items } from "../Items/Item";

import styles from "./ListItems.module.scss";
import { PostSkeleton } from "../RemvUpgrd/Skeleton";
import { RemvUpgrd } from "../RemvUpgrd";
import allList from "../../store/allList";
import popupRemove from "../../store/popupRemove";

export const ListItems = observer(() => {
  const [reload, setReload] = useState(0);
  const alert = popupRemove.isOpen;

  useEffect(() => {
    allList.fetchLists();
  }, [reload, alert]);

  const isCheck = (reloaded) => {
    setReload(reloaded);
  };
  return (
    <>
      {allList.data.length ? (
        allList.data.map((i, indx) => {
          return (
            <ul key={i.indx + i.title} className={styles.df} id={i.id}>
              <h3 className={styles.title}>{i.title}</h3>
              <Items items={i.items} isCheck={isCheck} />
              <div className={styles.edidSection}>
                <RemvUpgrd isEditable={true} key={indx} id={i.id} />
              </div>
            </ul>
          );
        })
      ) : (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      )}
    </>
  );
});
