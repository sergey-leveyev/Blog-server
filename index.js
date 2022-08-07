const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./router/index");

const app = express();
app.use(bodyParser.json());

app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connect to Database");
    app.listen(process.env.PORT, () => {
      console.log(`Server is runing on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
