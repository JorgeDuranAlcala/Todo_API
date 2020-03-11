import { Router } from "express";
import passport from "passport";

const router = Router();

router.route('/post')
.post(passport.authenticate('jwt', { session: false }),(req, res) => {
    const post = req.body.post;
    res.status(200).json({message: 'Posted', post, user: req.user})
})

export default router;