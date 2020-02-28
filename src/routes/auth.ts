import { Router } from "express";
import Auth from "../controllers/auth";

const router = Router();
const auth = new Auth();

router.route('/login')
.post(auth.loginUser)

router.route('/signup')
.post(auth.registerUser)

export default router;