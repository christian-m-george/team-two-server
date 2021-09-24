import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  console.log(req.body, "this is the req body");
  res.send('hit auth get');
});

authRouter.post("/", (req, res) => {
  console.log(req.body, "this is the req body");
  res.json();
});

export default authRouter;
