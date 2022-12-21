import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


import { observer } from 'mobx-react';

import {useForm} from 'react-hook-form';
import { Navigate } from 'react-router-dom';


import Register from '../../store/register';


import styles from './Registration.module.scss';



export const Registration = observer(() => {
  let isAuthRegistrations = Boolean(Register.registerData.length);
 

 const { register, handleSubmit, formState : {errors ,isValid }} = useForm({
    defaultValues:{
      fullName:'',
      email: '',
      password:''
    },
    mode: "onChange",
 })

  const submit=async(values)=>{
    await Register.fetchRegister(values)
    if(Register.registerData){
      const token = Register.registerData[0].token;
      window.localStorage.setItem('token', token)
    }
  }
  

  if(isAuthRegistrations) {return <Navigate to={'/'} />};
  

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(submit)}>
      <TextField 
      {...register('fullName', {required: 'Введите Ваше имя'})} 
      className={styles.field} 
      error = {Boolean(errors.fullName?.message)}
      label="Полное имя" 
      fullWidth />

      <TextField 
      {...register('email', {required: 'Введите Вашу почту'})}
      type={'email'} 
      className={styles.field} 
      helperText = {errors.email?.message}
      error = {Boolean(errors.email?.message)}
      label="E-Mail" 
      fullWidth />

      <TextField 
      {...register('password', {required: 'Введите пароль'})}
      type={'password'}
      className={styles.field}
      helperText = {errors.password?.message} 
      error = {Boolean(errors.password?.message)}
      label="Пароль" 
      fullWidth />

      <Button 
      disabled = {!isValid}
       type="submit"
       size="large" 
       variant="contained" 
       fullWidth>
        Зарегистрироваться
      </Button>
      </form>
    </Paper>
  );
});