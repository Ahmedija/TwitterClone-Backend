import mongoose from "mongoose";
import schemas from "../../conf/schemas";

export class TweetService {
  public static async find(): Promise<any[]> {
    const tweetModel = mongoose.model("Tweet", schemas.tweet);
    return await tweetModel.find();
  }

  public static async create(tweetContent: any, date: any): Promise<any> {
    const tweetModel = mongoose.model("Tweet", schemas.tweet);
    let newTweet = new tweetModel({ content: tweetContent, dateCreated: date });
    return newTweet.save();
  }
}
