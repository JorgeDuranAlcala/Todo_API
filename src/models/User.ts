import { Schema, model, Document } from "mongoose";

const user = new Schema({
    username: String,
    email: String,
    password: String,
    Date: { type: Date, default: new Date().getDate() }
})

interface user extends Document {
    username: string,
    email: string,
    password: string,
    Date: Date
}

export default model<user>('usuarios', user);