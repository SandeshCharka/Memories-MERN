import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// Newest versions of node we can use the import syntax, more modern and easier to use.
// const express = require('express');

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = `mongodb+srv://sandeshcharka:fseanfsean@memoriesmern.x9fhv.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  // useNewUrlParser/useUnifiedTopology not required but if not setup then may get some errors/warnings in the console
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// Makes sure we dont get any warnings in the console
mongoose.set("useFindAndModify", false);
