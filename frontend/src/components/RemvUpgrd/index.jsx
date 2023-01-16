import React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import styles from './RemvUpgrd.module.scss';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { CastomAlert } from '../castomAlert/CastomAlert';


export const RemvUpgrd = observer(({
  id,
  isFullPost,
  isEditable,
  onClickRemove
  
}) => {


 

  // const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/todo/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton  onClick={(e)=>onClickRemove(e,id)} color="secondary">
            <DeleteIcon />
          </IconButton>
          
        </div>
      )}

   
    </div>
  );
});