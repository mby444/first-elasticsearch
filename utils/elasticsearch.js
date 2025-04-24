import { client } from "../clients/elasticsearch.js";
import { ELASTICSEARCH_INDEX as index } from "../variables/env.js";

export const indexDoc = async (id, document) => {
  try {
    await client.index({
      index,
      id,
      document,
    });
  } catch (error) {
    console.log("indexDoc error: ", error.message);
  }
};

export const getDoc = async (id) => {
  try {
    await client.get({
      index,
      id,
    });
  } catch (error) {
    console.log("getDoc error: ", error.message);
  }
};

export const searchDoc = async (query) => {
  try {
    const result = await client.search({
      index,
      body: {
        query: {
          bool: {
            should: [
              { match: { name: { query, fuzziness: "AUTO" } } },
              { match: { description: { query, fuzziness: "AUTO" } } },
              { match: { category: { query, fuzziness: "AUTO" } } },
            ],
          },
        },
      },
    });

    const data = result.body.hits.hits.map((hit) => hit._source);

    return {
      success: true,
      message: "",
      data,
    };
  } catch (error) {
    console.log("searchDoc error: ", error);
    return {
      success: false,
      message: "Gagal melakukan pencarian",
      data: [],
    };
  }
};

export const updateDoc = async (id, doc) => {
  try {
    await client.update({
      index,
      id,
      doc,
    });
  } catch (error) {
    console.log("updateDoc error: ", error.message);
  }
};

export const deleteDoc = async (id) => {
  try {
    await client.delete({
      index,
      id,
    });
  } catch (error) {
    console.log("deleteDoc error: ", error.message);
  }
};
