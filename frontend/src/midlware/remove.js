import axios from "axios";


export const remove = async (req, res)=>{

    try {
        const id = req;
        await axios.delete(`http://localhost:3001/lists/${id}`);
        let t = await (await axios.get(`http://localhost:3001/lists`)).data;
        return t
    } catch (error) {

        console.log(error);
    }
}

