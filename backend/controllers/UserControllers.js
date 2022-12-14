import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import modelUser  from '../models/User.js';
import User from '../models/User.js';



export const register = async (req, res)=>{
    try{
     const errs = validationResult(req);
 
     if(!errs.isEmpty()) {
         return res.status(400).json(errs.array());
     }
 
     const pswd = req.body.password
     const salt = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(pswd, salt)
 
     const doc =  new modelUser({
         email: req.body.email,
         fullName: req.body.fullName,
         avatarUrl: req.body.avatarUrl,
         passwordHash: hash ,
        });
 
        const user = await doc.save()
 
        const token = jwt.sign({
         _id: user._id,
        },
        'secret123', 
        {
         expiresIn: '30d'
        }
        )
 
        const {passwordHash, ...userData } = user._doc
 
     return res.json({
         ...userData,
         token
     })
     }
     catch(err){
         console.log(err);
         res.status(400).json({
             messege:"Не удалось зарегестрировать пользователя"
         })
     }};
 
export const login = async (req, res) => {

    try {
    
      const isUserLogin = await modelUser.findOne({email: req.body.email});
    
    
      if(!isUserLogin){
        return res.status(404).json({
            massage: 'Неверный логин или пароль1'
        })
      }
    
    
    const isPassword = await bcrypt.compare(req.body.password, isUserLogin._doc.passwordHash );
    
    if(!isPassword){
        return res.status(400).json( {
            massage:'Неверный логин или пароль2'
        })
    }
    
    const token = jwt.sign({
        _id: isUserLogin._id,
       },
       'secret123', 
       {
        expiresIn: '30d'
       }
       )
    
       const {passwordHash, ...userData } = isUserLogin._doc
    
    res.json({
        ...userData,
        token
    })

    } catch (error) {
        console.log(error);
            res.status(500).json({
                messege:"Неверный логин или пароль"
            })
    }
    } ;   

    export const authMe = async (req, res) => {
        try {

            const user = await User.findById(req.userId)
            if(!user){
                return res.status(404).json({
                    massage: 'Пользователь не найден'
                })
            };


            const {passwordHash, ...userData } = user._doc
    
            res.json({ userData});

        } 
        catch (error) {
            console.log(error);
            res.status(400).json({
                massage: 'Ошибка аудентификации'
            })
        }
    }
