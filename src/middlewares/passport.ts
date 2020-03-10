import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt"
import User from "../models/User"

const ops: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.TOKEN_SECRET}` 
}

const passStra = new Strategy(ops, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if(user) {
            return done(null, user)
        }
       return done(null, null)
    } catch (error) {
        console.log(error)
    }
    
})

export default passStra;