import dotenv from 'dotenv';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app = express();

const morganOption = process.env.NODE_ENV === "production" 
    ? "tiny" 
    : "common";

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());
app.use(express.json())

export default app;
