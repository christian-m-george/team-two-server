import express from "express";
// import authService from './authDataService';

const authRouter = express.Router();
// const jsonBodyParser = express.json();

authRouter.post("/auth/login", jsonBodyParser, (req, res, next) => {
  console.log(req.body, "this is the req body");
});

export default authRouter;
