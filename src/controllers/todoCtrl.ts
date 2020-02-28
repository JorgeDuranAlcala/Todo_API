import { Request, Response } from "express"
import Todo from "../models/Todo";

export default class todoControl {


    constructor() {
    
    }
    /**
     * Send a Todo by its "Id"
     * @param req
     * @param res 
     */

    public async getTodoById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const todo = await Todo.findById(id);

            return res.send({
                message: `es es el id del usuario ${id}`,
                todo
            })
    }

    /**
     * Send all todos in the DataBase
     */
    public async getAllTodos(req: Request, res: Response): Promise<Response> {

        const todos = await Todo.find();

        return res.send({
            message: `Getting all of users in the DB`,
            todos
        })
    }

    /**
     * Create a new Todo using data provided by the user
     */
    public async addTodos(req: Request, res: Response): Promise<Response> {

        const { title, description } = req.body;

        const newTodo =  await Todo.create({ title, description });

        return res.send({
            message: `New user Added`,
            newTodo
        })
    }

    /**
     * Delete Todo created by the User
     */
    public async deleteTodos(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const removedTodo = await Todo.findByIdAndRemove(id);

            return res.send({
                message: `es es el id del usuario ${id}`,
                removedTodo
            })
    }

    /**
     * Update Todo created by the User
     * @param req 
     * @param res 
     */

    public async updateTodo(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const { title, description } = req.body

        const todoUpdated = await Todo.findByIdAndUpdate(id,{ title, description})

        return res.send({
            message: 'todo updated',
            todoUpdated
        })
    }
}

