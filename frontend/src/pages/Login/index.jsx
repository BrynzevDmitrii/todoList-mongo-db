import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { observer } from 'mobx-react';

import login from '../../store/login'
import {useForm} from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import styles from "./Login.module.scss";



export const Login = observer(() => {
  const isLogin = Boolean(login.dataLogin.length) 

  const { register, handleSubmit, formState : {errors ,isValid }} = useForm({
    defaultValues:{
      email: 'Dmitrii@mail.ru',
      password:'12345'
    },
    mode: "onChange",
 })

 const submit=async(values)=>{
  await login.fetchLogin(values)
  if(login.dataLogin){
     const  token = login.dataLogin[0].token
  window.localStorage.setItem('token', token)
  }
  
  
}

if(isLogin) {return <Navigate to={'/'} />};

  return (
    <>
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} vriant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(submit)}>
      <TextField
       {...register('email', {required: 'Введите Вашу почту'})}
        className={styles.field}
        label="E-Mail"
        fullWidth
      />
      <TextField 
       {...register('password', {required: 'Введите Ваш пароль'})}
      className={styles.field} 
      label="Пароль" 
      fullWidth />
      <Button 
      disabled = {!isValid}
      type = 'submit'
      size="large" 
      variant="contained"
       fullWidth>
        Войти
      </Button>
      </form>
    </Paper>
    
    </>
  );
});