import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { loginSchema, registerSchema } from "../schemas/user.schemas.js";
import { signin, signup } from "../controllers/user.controller.js";
import { validateAuth } from "../middlewares/validateAuth.js";


const userRouter = Router();

userRouter.post('/cadastro', validateSchema(registerSchema), signup);
userRouter.post('/', validateSchema(loginSchema), signin);


export default userRouter;

