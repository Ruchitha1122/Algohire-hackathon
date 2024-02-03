import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Router from "./routes/route.js";

import Connection from "./database/db.js";
dotenv.config();

const app = express();
app.use(cors());

app.use("/", Router);


const PORT = 8000;

app.listen(8000, console.log(`server started on PORT ${PORT}`));

const USERNAME= process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);