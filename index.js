import express from "express";
import { PORT } from "./variables/env.js";
import { clientInfo } from "./clients/elasticsearch.js";
import { indexRouter } from "./routes/index.js";
import { notFoundRouter } from "./routes/notFound.js";

clientInfo();

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/", indexRouter);
app.use("/*splat", notFoundRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
