import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import bodyParser from "body-parser"

import user from "./Routes/user.js"
import admin from "./Routes/admin.js"


dotenv.config({ silent: process.env.NODE_ENV === "production" });
const port = process.env.PORT;
const app = express();




app.listen(port, () => {
  console.log(`server listening at http://127.0.0.1:${port}`);
});
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit: '400kb'}));
app.use("/",user)
app.use("/admin",admin)