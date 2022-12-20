import axios from "axios";

export const login = async (req, res) => {
    try {
        const isUserLogin = await req.email;
        const isPassword = await req.password;
        console.log(isUserLogin);

        const isDataInBd = (await axios('http://localhost:3001/profile')).data
        console.log(isDataInBd);
    
        const result = isDataInBd.filter((i)=>i.email === isUserLogin && i.password === isPassword)

        if(result) {
            return result
         }

    } catch (error) {
        alert('Not email or password')
        console.error(error);
    }
      

    
   
    
    
    
}