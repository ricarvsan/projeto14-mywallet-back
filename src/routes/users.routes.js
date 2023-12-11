import { Router } from 'express'
import { validateSchema } from '../middlewares/validateSchema.js'
import { loginSchema, registerSchema } from '../schemas/user.schemas.js'
import {
  logged,
  logout,
  signin,
  signup,
} from '../controllers/user.controller.js'
import { validateAuth } from '../middlewares/validateAuth.js'

const userRouter = Router()

userRouter.post('/cadastro', validateSchema(registerSchema), signup)
userRouter.post('/', validateSchema(loginSchema), signin)
userRouter.post('/logout', validateAuth, logout)
userRouter.get('/logged', validateAuth, logged)

export default userRouter
