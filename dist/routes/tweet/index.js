"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../services/tweet/index");
const router = express_1.default.Router();
/**
 *
 */
router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result;
    try {
        result = yield index_1.TweetService.find();
    }
    catch (e) {
        console.log("error: ", e);
        res.status(400).json({ error: "An error occurred" });
    }
    res.status(200).json(result);
}));
/**
 *
 */
router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
    let result;
    try {
        result = yield index_1.TweetService.create(req.body.tweet, req.body.datetime);
    }
    catch (e) {
        console.log("error: ", e);
        res.status(400).json({ error: "An error occurred" });
    }
    res.status(200).json(result);
}));
module.exports = router;
//# sourceMappingURL=index.js.map