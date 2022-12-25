import React from 'react';
import Button from '@mui/material/Button';


import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react';

import login from '../../store/login';
import register from '../../store/register';
import isAuthme from '../../store/isAuthMe';

import styles from './Header.module.scss';


export const Header = observer(() => {
let isAuthHeader = Boolean(isAuthme.getDate())

  const onClickLogout = () => {
   isAuthme.setLogoutMe()
   register.setLoguot();
   login.setLoguot();
   window.localStorage.removeItem('token')
  };

  console.log('render');

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to ="/">
            <div>TodoListApp</div>
          </Link>
          <div className={styles.buttons}>
            {isAuthHeader ? (
              <>
                <Link to ="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Link to ="/register">
                <Button onClick={()=>onClickLogout()} variant="contained" color="error">
                  Выйти
                </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
});