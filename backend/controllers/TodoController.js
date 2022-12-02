import Todo from "../models/index.js";

export const getAll = async(req, res)=> {
    try {
        const todos = await Todo.find().populate('user').exec();

        res.json(todos);
        
    } 
    catch (error) 
    {
        console.log(error);
         res.status(500).json({
             messege:"Не удалось загрузить записи"
         });
    }
}

export const getOne = async(req, res)=> {
    try {

        const todoId = req.params.id
        const todo = await Todo.findById(todoId)
        res.json(todo);
        
    } 
    catch (error) 
    {
        console.log(error);
         res.status(500).json({
             messege:"Не удалось загрузить запись"
         });
    }
}


export const create = async(req, res)=>{
    try {
        const doc = new Todo({
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            fullDescription: req.body.fullDescription,
            user:req.userId
        });

        const todo = await doc.save();

        res.json(todo);
        
    } catch (error) {
        console.log(error);
         res.status(500).json({
             messege:"Не удалось создать запись"
         });
    }
}

export const remove = async(req, res)=> {
    try {

        const todoId = req.params.id
        
        Todo.findOneAndDelete({
            _id: todoId,
        },
        (err, doc) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    massage: 'Не удалось удалить список'
                })
            }

            if(!doc) {
                return res.status(404).json(
                    {
                        massage: "Список не найден"
                    }
                )
            }

            res.json({
                success: true,
            })
        }
        )
   
        
    } 
    catch (error) 
    {
        console.log(error);
         res.status(500).json({
             messege:"Не удалось загрузить запись"
         });
    }
}

export const update = async(req, res)=> {
    try {

        const todoId = req.params.id
        
        await Todo.updateOne({
            _id: todoId,
        },
        {
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            fullDescription: req.body.fullDescription,
            user:req.userId
        },)
            res.json({
                success: true,
            })

        }
         
    catch (error) 
    {
        console.log(error);
         res.status(500).json({
             messege:"Не удалось загрузить запись"
         });
    }
}