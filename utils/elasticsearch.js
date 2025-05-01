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

const getSortOption = (sort = "") => {
  const sortTable = {
    price_asc: {
      price: {
        order: "asc",
      },
    },
    price_desc: {
      price: {
        order: "desc",
      },
    },
    stock_desc: {
      stock: {
        order: "desc",
      },
    },
    rating_desc: {
      rating: {
        order: "desc",
      },
    },
  };
  sort = sort.toLowerCase();
  let sortOpt = {};
  const isSortKeyExist = Object.keys(sortTable).includes(sort);

  if (isSortKeyExist) sortOpt = sortTable[sort];

  return sortOpt;
};

export const searchDoc = async (
  query,
  category = null,
  sort = "",
  page = 1
) => {
  const sortOption = getSortOption(sort);

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
        sort: [sortOption],
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
