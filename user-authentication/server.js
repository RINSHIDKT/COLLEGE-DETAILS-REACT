import express from "express";
import dotenv from "dotenv";
import router from "./router.js";
import cors from 'cors';
import connection from "./connection.js";
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/authentication",router);
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log("SERVER STARTED",process.env.PORT);
})})
.catch(()=>{
    console.log("DATA BASE NOT CONNECTED");
})

