import User from "../models/User"
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import env from "dotenv"
import bcrypt from "bcryptjs"
env.config()

export default class Auth {
    constructor() {
    }

    /**
     * Create a new user using data given by user
     * @param req 
     * @param res 
     */

    public async registerUser(req: Request, res: Response): Promise<Response> {

           const { username, email, password } = req.body

           
           const user = await User.findOne({email: email})
           if(user) return res.status(404).json({ message: 'This user already exist' });
           
           
           const userTo = { username, email, password};
           
           const newUser = new User(userTo);
           const userSP = await newUser.save();
           
           const token = jwt.sign({ id: userSP.id, email: userSP.email },`${process.env.TOKEN_SECRET}`)

            return res.status(200).send({
                message: 'User registered succesfully',
                userSP,
                token
            })
    }

    /**
     * login to an user by email and password 
     * @param req 
     * @param res 
     */

    public async loginUser(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

            const user = await User.findOne({email: email});
            if(!user) return res.status(400).json({message: "This user doesn't exist"});
            
              const compared = await bcrypt.compare(password, user.password);
        
              if(!compared) return res.status(400).json({message: "Wrong password"})

            return res.status(200).send({
                message: 'User logged in succesfully',
            })
    }
}