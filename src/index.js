import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { NODE_ENV } from "./config.js";

const app = express();
const port = 3000;

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello, world!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
