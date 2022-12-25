import React from "react";
import clsx from "clsx";
import styles from "./ListItems.module.scss";

export const ListItems = (props) => {


  return (
<>
            {props.title}
            <ul key={props.id+'jkej'} className={styles.df}>

        {props.items.map((i) => {
          return (
              <li key={props.id+'hd'}
                className={clsx(
                  styles.item,
                  props.isChecket && styles.underline
                )}
              >
                &nbsp; {i}
              </li>
          
          );
        })}
          </ul>
    
    </>
  );
};
