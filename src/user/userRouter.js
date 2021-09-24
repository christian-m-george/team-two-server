import express from 'express';

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    console.log('user route accessed');
    res.send('hit the user endpoint');
})
  
userRouter.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

export default userRouter;