import User from "../models/User"
import { Response, Request } from "express";

export default class Auth {
    constructor() {
    }

    /**
     * Create a new user using data given by user
     * @param req 
     * @param res 
     */

    public async registerUser(req: Request, res: Response): Promise<Response> {

            const newUser = await User.create();

            return res.status(200).send({
                message: 'User registered succesfully',
                newUser
            })
    }

    /**
     * login to an user by email and password 
     * @param req 
     * @param res 
     */

    public async loginUser(req: Request, res: Response): Promise<Response> {

            const user = await User.findOne();

            return res.status(200).send({
                message: 'User logged in succesfully',
            })
    }
}