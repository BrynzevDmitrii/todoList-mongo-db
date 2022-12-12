import express from 'express';
import mongoose from'mongoose';
import cors from 'cors'

import { registerValidator, loginValidator  } from './validations/index.js';
import  todoValidator from './validations/todo.js'

import checkIsAuth from './utils/checkIsAuth.js'

import{ TodoController, UserController } from './controllers/index.js'




mongoose.connect(
    'mongodb+srv://admin:12345@cluster0.md7blvm.mongodb.net/todoList?retryWrites=true&w=majority'
).then(()=>{console.log('db ok');})
.catch((err)=>console.log('db err', err));



const app = express();


app.use(express.json());
app.use(cors());
app.get('/', (req, res)=>{
    res.send('hello')
})


app.post('/auth/register', registerValidator, UserController.register);
app.post('/auth/login', loginValidator, UserController.login );
app.get('/auth/me',checkIsAuth, UserController.authMe)



app.get('/todo', TodoController.getAll);
app.get('/todo/:id', todoValidator, TodoController.getOne);
app.post('/todo', checkIsAuth , todoValidator,  TodoController.create);
app.delete('/todo/:id', checkIsAuth, TodoController.remove);
app.patch('/todo/:id', checkIsAuth, TodoController.update);



app.listen (4444 , (err)=>{
     if (err) {
     return console.log(err);   
    }
        console.log('server ok...');
})