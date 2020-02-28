import { Schema, model, Document } from "mongoose";

const todo = new Schema({
    title: String,
    description: String,
})

interface Todo extends Document {
    title: string;
    description: string;
}

export default model<Todo>('todo', todo)