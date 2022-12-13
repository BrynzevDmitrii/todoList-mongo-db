import React from 'react';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import styles from './List.module.scss';
import { PostSkeleton } from './Skeleton';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { observer } from 'mobx-react';
import { ItemsHomePage } from '../ItemsHomePage/ItemsHomePage';


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
  if (isLoading) {
    return <PostSkeleton />;
  }

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
        <Box 
        textAlign='center' 
        color='InfoText' 
        fontFamily='monospace'
        height={80}
        bgcolor ='chocolate'
        >
          <p className={styles.titleParagraph}>
          {title}
          </p>
          
        </Box>
      }
      
        <ItemsHomePage />
        
        
    </div>
  );
});