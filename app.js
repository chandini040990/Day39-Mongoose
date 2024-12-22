import express from "express";

import connectDB from "./db/connectdb.js";

import { createDoc } from "./models/Movie.js";

const app = express();
const port = 5001;
// const DATABSE_URL = "mongodb+srv://chandinisureshkumar:H8NsKsffNeJcKS2Q@movie.dwd0f.mongodb.net/?retryWrites=true&w=majority&appName=Movie";
const DATABSE_URL = "mongodb://127.0.0.1:27017/Movie";

connectDB(DATABSE_URL);

//create and save document
createDoc();


app.listen(port, () => {
    console.log("server is running")
})


