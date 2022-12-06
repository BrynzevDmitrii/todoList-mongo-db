import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true,
    }, 

    
    items : {
            type: mongoose.Schema.Types.Array,
            ref: 'Item',
            required: true,
        }, 
    isChecket :{
            type: mongoose.Schema.Types.Boolean,
            ref: 'Item',
            required: true,
        },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
},
{
    timestamps: true,
}
)

export default mongoose.model('Todo', TodoSchema )