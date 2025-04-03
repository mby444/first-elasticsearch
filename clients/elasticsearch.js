import { Client } from "@elastic/elasticsearch";
import { ELASTICSEARCH_NODE as node } from "../variables/env.js";

export const client = new Client({
  node,
});

export const clientInfo = async () => {
  try {
    const response = await client.info();
    console.log("Connected to Bonsai Elasticsearch:", response.body);
  } catch (error) {
    console.error("Elasticsearch Connection Error:", error);
  }
};
