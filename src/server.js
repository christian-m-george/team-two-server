import dotenv from 'dotenv';
import app from './app.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import surveyRouter from './survey/surveyRouter.js';
import config from './config.js'

dotenv.config();

app.get("/", (req, res) => {
    res.send("hello, world!");
});
  
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/survey', surveyRouter)
  
app.listen(config.PORT, () => {
console.log(`Example app listening at http://localhost:${config.PORT}`);
});