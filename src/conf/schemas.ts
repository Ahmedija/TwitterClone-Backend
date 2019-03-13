import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Schemas = {
  tweet: new Schema({
    content: String,
    dateCreated: String
  })
};

export default Schemas;
