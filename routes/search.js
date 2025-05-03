import { Router } from "express";
import { searchDoc } from "../utils/elasticsearch.js";
import { ResponseOptions } from "../utils/responseOptions.js";

export const searchRouter = Router();

searchRouter.get("/", async (req, res) => {
  const { q, category, sort, page } = req.query;
  console.log("q", q);

  const result = await searchDoc(q, category, sort, page);

  console.log("result", result);

  res.json(result);
});
