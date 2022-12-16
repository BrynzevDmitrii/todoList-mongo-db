import React from 'react';
import styles from './ListItems.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';

export  const ListItems = observer((props) => {
    const bull = <span className={styles.bullet}>•</span>;
  
    return (
      <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={styles.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  })