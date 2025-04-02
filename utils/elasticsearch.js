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

export const searchDoc = async (id) => {
  try {
    throw new Error("Function not finished yet");
    await client.search({});
  } catch (error) {
    console.log("searchDoc error: ", error.message);
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
