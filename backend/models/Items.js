import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
    items:{
        type: [], 
    }, 

    isChecket: {
        type: Boolean, 
    },
    
},
{
    timestamps: true,
}
)

export default mongoose.model('Item', ItemSchema )