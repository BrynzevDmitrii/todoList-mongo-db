import React from "react";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Skeleton.module.scss"


export const PostSkeleton = () => {
  return (
    <div className={styles.root} >
    
      <div className={styles.title}>
      <Skeleton variant="text" width='60%' height={35} />
      </div> 
      <div className={styles.body}>
            <div className={styles.items}>
              <Skeleton variant="text" width='80%' height={35} />
              <Skeleton variant="text" width='80%' height={35} />
              <Skeleton variant="text" width='80%' height={35} />
              <Skeleton variant="text" width='80%' height={35} />
              <Skeleton variant="text" width='80%' height={35} />
            </div>
     
           
          <div className={styles.chekbox}>
              <Skeleton variant="text" width={20} height={35} />
              <Skeleton variant="text" width={20} height={35} />
              <Skeleton variant="text" width={20} height={35} />
              <Skeleton variant="text" width={20} height={35} />
              <Skeleton variant="text" width={20} height={35} />
            </div>
          </div>
    </div>
  );
};