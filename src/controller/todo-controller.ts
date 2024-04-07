import {Request, Response} from "express"
import Todo from '../models/todo';

let todos: Todo [] =[
    {
        id: new Date().toISOString(),
        task: 'Learn node.js',
        isDone: false,
    },
];

export const getAllTodos = (req: Request, res: Response) => {
    res.status(200).json({"message": "Sucessfully loaded", todos: todos})
}

export const addTodo = (req:Request, res: Response) => {
    // const task = req.body.task
    // const isDone = req.body.isDone

    const {task, isDone} = req.body

    const newTodo: Todo = {
        
            id: new Date().toISOString(),
            task,
            isDone,
        
    };

    todos.push(newTodo);


    res.status(200).json({message: 'Successfully loaded', todos: todos});

}

export const updateTodo = (req: Request, res:Response) => {
    const {todoId} = req.params;
    const {task, isDone} = req.body;

    const index = todos.findIndex(element => element.id === todoId);
    todos[index].task = task;
    todos[index].isDone = isDone;

    res.status(200).json({message: 'Successfully updated', todos: todos });
}

export const deleteTodo = (req: Request, res:Response) => {
    const {todoId} = req.params;
    todos = todos.filter ((element) => element.id !== todoId);
    res.status(200).json({message: 'Successfully deleted', todos: todos });
}