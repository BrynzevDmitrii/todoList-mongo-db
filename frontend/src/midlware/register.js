import axios from "axios";


export const register = async (req, res)=>{
    try{
     const fullName = req.fullName;
     const email = req.email;
     const password = req.password;

     let r =await axios.post(
    'http://localhost:3001/profile',{
            "email": email,
            "password" : password,
            "fullName": fullName,
            "token" : "rewj232ibh24deiqwde5ljk44dfqewudh8"
        }
    )
    return r;
     }
     catch(err){
         console.log(err);
         res.status(400).json({
             messege:"Не удалось зарегестрировать пользователя"
         })}
        }