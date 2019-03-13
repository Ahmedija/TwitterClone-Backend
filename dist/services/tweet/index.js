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
const mongoose_1 = __importDefault(require("mongoose"));
const schemas_1 = __importDefault(require("../../conf/schemas"));
class TweetService {
    static find() {
        return __awaiter(this, void 0, void 0, function* () {
            const tweetModel = mongoose_1.default.model("Tweet", schemas_1.default.tweet);
            return yield tweetModel.find();
        });
    }
    static create(tweetContent, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const tweetModel = mongoose_1.default.model("Tweet", schemas_1.default.tweet);
            let newTweet = new tweetModel({ content: tweetContent, dateCreated: date });
            return newTweet.save();
        });
    }
}
exports.TweetService = TweetService;
//# sourceMappingURL=index.js.map