import { todos } from "../../../data/todos";


export default function handler(req,res){
    if(req.method === "GET"){
        res.status(200).json(todos)
    }else if(req.method === "POST"){
        const {todo} = req.body;
        //Store data in a DB
        const newTodo = {
            id: todos.length +1,
            title:todo,
        };
        res.status(201).json({
            message: "Success",
            data: newTodo
        })
    }else if(req.method === "DELETE"){
        //Delete all todos
        res.status(200).json({
            message: "All todos deleted",
            data:[]
        })
    }else if(req.method === "PUT"){
        //Replace all data
        res.status(200).json({
            message:"All data replaced",
            data:req.body
        })
    }
}