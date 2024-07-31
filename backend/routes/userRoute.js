import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'

// router
const userRouter = express.Router()

// user data
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

export default userRouter