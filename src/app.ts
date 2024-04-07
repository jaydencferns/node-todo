import express, {Application, NextFunction, Request, Response} from "express";
import Todo from './models/todo'

// import { getAllTodos } from "./controller/todo-controller";

import * as todoController from './controller/todo-controller'

let todos: Todo [] =[
    {
        id: new Date().toISOString(),
        task: 'Learn node.js',
        isDone: false,
    },
];

const app: Application = express();

// app.use('/todo', (req: Request, res: Response, next: NextFunction) => {
//     console.log('first middleware');
//     next();
// });

// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log('first middleware');
//     next();
// });

app.use(express.json());

app.get("/todos",todoController.getAllTodos);

app.post('/todo', todoController.addTodo);

app.patch('/todo/:todoId', todoController.updateTodo);

app.delete('/todo/:todoId', todoController.deleteTodo);

app.listen(8000);