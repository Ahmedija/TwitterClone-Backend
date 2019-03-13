import express from "express";
import { Request, Response } from "express";

import { TweetService } from "../../services/tweet/index";

const router = express.Router();

/**
 *
 */
router.get("/", async (req: Request, res: Response) => {
  let result;
  try {
    result = await TweetService.find();
  } catch (e) {
    console.log("error: ", e);
    res.status(400).json({ error: "An error occurred" });
  }

  res.status(200).json(result);
});

/**
 *
 */
router.post("/", async (req: Request, res: Response) => {
  let result;
  try {
    result = await TweetService.create(req.body.tweet, req.body.datetime);
  } catch (e) {
    console.log("error: ", e);
    res.status(400).json({ error: "An error occurred" });
  }

  res.status(200).json(result);
});

module.exports = router;
