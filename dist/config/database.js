"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.initDatabase = () => {
    mongoose_1.default.connect("mongodb://localhost:27017/twitterclone", {
        useNewUrlParser: true
    });
    var tweetSchema = new Schema({
        title: String,
        author: String,
        dateCreated: Date
    });
    var tweet = mongoose_1.default.model("Tweet", tweetSchema);
};
//# sourceMappingURL=database.js.map