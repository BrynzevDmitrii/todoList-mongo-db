import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { observer } from "mobx-react";
import { RemvUpgrd } from "../RemvUpgrd/index"
import clsx from "clsx";
import styles from "./ListItems.module.scss";

export const ListItems = observer((props) => {
  return (
    <Card className={styles.root}>
      <RemvUpgrd isEditable PropStyles = {styles.r}/>
      <CardContent>
        <Grid item
          container
          xs={12}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            className={styles.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <CardActions>
            <Button size="small">Смотреть весь список</Button>
          </CardActions>
        </Grid>
        <Typography variant="h5" component="h2">
          Задачи карточки
        </Typography>

        {props.items.map((i, indx) => {
          return (
            <List key={indx } className={styles.df}>
              {indx + 1}
              <ListItem
                className={clsx(
                  styles.item,
                  props.isChecket && styles.underline
                )}
              >
                &nbsp; {i}
              </ListItem>
            </List>
          );
        })}
      </CardContent>
    </Card>
  );
});
