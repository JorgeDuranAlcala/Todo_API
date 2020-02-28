import { Router, Request, Response } from "express";
import todoControl from "../controllers/todoCtrl";

const router  = Router();
const todoCtl = new todoControl()

router.route('/todos')
.get(todoCtl.getAllTodos)
.post(todoCtl.addTodos)

router.route('/todos/:id')
.get(todoCtl.getTodoById)
.put(todoCtl.updateTodo)
.delete(todoCtl.deleteTodos)



export default  router;