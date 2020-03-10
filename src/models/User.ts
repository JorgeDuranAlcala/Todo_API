import { Schema, model, Document } from "mongoose";
import bcrypt, { compare } from "bcryptjs";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    Date: { type: Date, default: new Date().getDate() }
})

interface user extends Document {
    username: string,
    email: string,
    password: string,
    Date: Date,
}

userSchema.pre<user>('save', async function(next) {
    const user = this;
    if(!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
})



export default model<user>('usuarios', userSchema);