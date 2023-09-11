import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import User from "./models/User";
import {createUserController} from "./controllers/createUserController";

const PORT = 5000;

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_PATH,
  } = process.env;

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.get("/", (req, res)=>{
})
app.get("/success", (req, res)=>{
})
app.get("/failed", (req, res)=>{
})

app.post("/", createUserController);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)
  .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1);
    }); 