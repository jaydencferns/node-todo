import {Router} from "express"
import * as todoController from '../controller/todo-controller'


const router = Router();

router.get('/todos', todoController.getAllTodos);

router.post('/todo', todoController.addTodo);

router.patch('/todo/:todoId', todoController.updateTodo);

router.delete('/todo/:todoId', todoController.deleteTodo);

export default router
