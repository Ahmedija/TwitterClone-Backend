require("dotenv").config();
import bodyParser from "body-parser";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/twitterclone", {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*Rute */
const tweet = require("./routes/tweet/index");
app.use("/api/", tweet);

app.use((req: any, res: any, next: any) => {
  res.status(404);

  res.send({ error: "Not found any route" });
  return;
});

// start the Express server
app.listen({
  port: process.env.PORT || 3333,
  hostname: process.env.YOUR_HOST || "0.0.0.0",
  callback: () => console.log("W-API listening on port 3333!")
});
