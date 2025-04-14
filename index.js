import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./variables/env.js";
import { clientInfo } from "./clients/elasticsearch.js";
import { indexRouter } from "./routes/index.js";
import { searchRouter } from "./routes/search.js";
import { notFoundRouter } from "./routes/notFound.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/search", searchRouter);
app.use("/", indexRouter);
app.use("/*splat", notFoundRouter);

clientInfo().then(() => {
  app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
});
