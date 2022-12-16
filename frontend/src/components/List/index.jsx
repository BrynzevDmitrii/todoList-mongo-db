import React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import styles from './List.module.scss';
// import { PostSkeleton } from './Skeleton';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import allList from '../../store/allList';

export const List = observer(({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {


 

  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/todo/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton  onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {
         !allList.data?'Loading' : 'jr'
      }
   
    </div>
  );
});