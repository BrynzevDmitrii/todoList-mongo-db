import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import register from '../../store/register';
import { observer } from 'mobx-react';


export const Header = observer(() => {
  const isAuth = register.registerData.length


  const onClickLogout = () => {
   register.setLoguot();
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to ="/">
            <div>TodoListApp</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to ="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={()=>onClickLogout()} variant="contained" color="error">
                  Выйти
                </Button>
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