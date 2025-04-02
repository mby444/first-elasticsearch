import express from "express";
import { PORT } from "./variables/env.js";
import { indexRouter } from "./routes/index.js";
// import { notFoundRouter } from "./routes/notFound.js";

const app = express();

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
