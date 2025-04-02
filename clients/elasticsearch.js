import { Client } from "@elastic/elasticsearch";
import { ELASTICSEARCH_NODE1 } from "../variables/env.js";

export const client = new Client({
  node: ELASTICSEARCH_NODE1,
});
