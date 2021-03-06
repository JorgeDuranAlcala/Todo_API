import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors"
import router from "./routes/index.routes";
import specialRoutes from "./routes/special.routes"
import authRouter from "./routes/auth.routes"
import mongoose from "mongoose";
import passport from "passport";
import passStra from "./middlewares/passport";
dotenv.config();

export default class App {

    public app: express.Application = express();

    constructor() {
        this.config();
    }

    private config(): void {
        this.app.set('port', process.env.PORT || 8080);
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use('/api', router, authRouter,specialRoutes)
        this.app.use(passport.initialize())
        passport.use(passStra)
    }

    public async init(): Promise<any> {
        await this.app.listen(this.app.get('port'), () => console.log(`Server On Port ${this.app.get('port')}`));
        await mongoose.connect(`${process.env.DB_CONNECT}`, { useNewUrlParser: true, useUnifiedTopology: true }).then( value => {
            console.log(`The dataBase is Connected`)
        }).catch( error => console.log(error));
    }


}