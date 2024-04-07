import express, {Application} from "express";
import Todo from './models/todo'

// import { getAllTodos } from "./controller/todo-controller";

import * as todoController from './controller/todo-controller'
import todoRouter from './router/todo-router'

let todos: Todo [] =[
    {
        id: new Date().toISOString(),
        task: 'Learn node.js',
        isDone: false,
    },
];

const app: Application = express();

app.use(express.json());

app.use('/todo', todoRouter);

app.listen(8000);

// GET localhost:8000/todo/todos