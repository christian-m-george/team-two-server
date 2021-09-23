import app from "./app";
import authRouter from './auth/authRouter'

app.use('/auth', authRouter)