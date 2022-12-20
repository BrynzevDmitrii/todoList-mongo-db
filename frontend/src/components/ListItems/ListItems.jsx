import React from "react";
import { observer } from "mobx-react";
import clsx from "clsx";
import styles from "./ListItems.module.scss";

export const ListItems = observer((props) => {
  return (
    
         <>
            {props.title}
         

        {props.items.map((i, indx) => {
          return (
            <ul key={indx } className={styles.df}>
              {indx + 1}
              <li
                className={clsx(
                  styles.item,
                  props.isChecket && styles.underline
                )}
              >
                &nbsp; {i}
              </li>
            </ul>
          );
        })}
    
    </>
  );
});
