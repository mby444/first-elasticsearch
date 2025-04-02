import { Router } from "express";

export const notFoundRouter = Router();

notFoundRouter.get("/", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});
