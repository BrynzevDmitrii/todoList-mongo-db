import React, { useRef, useState } from "react";
import clsx from "clsx";
import axios from "axios";

import { Checkbox } from "@mui/material";

import styles from "../ListItems/ListItems.module.scss";

export const Items = (props) => {
  const [isFinished, setIsFinished] = useState(false);

  const idRef = useRef();

  const hendelChekced = async (e) => {
    const myHeaders = new Headers();
    const id = idRef.current.parentElement.id;
    const itemId = e.target.id;

    const list = await (await axios.get(`http://localhost:3001/lists/${id} `))
      .data;

    const snapShot = structuredClone(list);
    setIsFinished(snapShot.items[itemId].isChecked);
    snapShot.items[itemId].isChecked = !isFinished;

    await axios.put(
      `http://localhost:3001/lists/${id} `,
      snapShot,
      myHeaders.set("Content-Type", "application/json; charset=utf-8")
    );

    props.isCheck(isFinished)
  };
  return (
    <>
      {props.items.map((item, idx) => {
        return (
          <li
            ref={idRef}
            id={idx}
            key={idx}
            className={clsx(styles.item, item.isChecked && styles.underline)}
          >
            <Checkbox
              id={String(idx)}
              key={idx}
              checked={item.isChecked}
              onClick={(e) => hendelChekced(e)}
            />

            {item.item}
          </li>
        );
      })}
    </>
  );
};
