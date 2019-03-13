"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
mongoose_1.default.connect("mongodb://localhost:27017/twitterclone", {
    useNewUrlParser: true
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/*Rute */
const tweet = require("./routes/tweet/index");
app.use("/api/", tweet);
// app.use((req: any, res: any, next: any) => {
//   res.status(404);
//   res.send({ error: "Not found any route" });
//   return;
// });
// start the Express server
app.listen({
    port: process.env.PORT || 3333,
    hostname: process.env.YOUR_HOST || "0.0.0.0",
    callback: () => console.log("W-API listening on port 3333!")
});
//# sourceMappingURL=app.js.map