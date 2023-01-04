import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import { AddList } from "./AddList";
import { ListItems } from "../components/ListItems/ListItems";

import isAuthMe from "../store/isAuthMe";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const [addList, setAddList] = useState(false);

  useEffect(() => {
    isAuthMe.fetchAuthMe();
  }, []);

  const createList = () => {
    setAddList(true);
  };

  const closedPopup = () => {
    setAddList(false);
  };

  if (!isAuthMe.getDate()) {
    return <Navigate to={"/register"} />;
  }
  console.log("render <Home/>");
  return (
    <>
      <Button variant="contained" onClick={() => createList()}>
        Создать новый список
      </Button>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      ></Tabs>
      <Grid container spacing={2}>
        <Grid xs={8} item>
          <ListItems />
        </Grid>
      </Grid>
      {addList && <AddList openPopup={createList} closedPopup={closedPopup} />}
    </>
  );
};
