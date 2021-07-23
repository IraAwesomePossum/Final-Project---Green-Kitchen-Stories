const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Mongo connected"))
  .catch((err) => console.log(err));

app.listen("3000", () => {
  console.log("Server is running on Port 3000");
});
