import { client } from "../clients/elasticsearch.js";
import { ELASTICSEARCH_INDEX as index } from "../variables/env.js";
import { ResponseOptions } from "./responseOptions.js";

export const indexDoc = async (id, document) => {
  try {
    await client.index({
      index,
      id,
      document,
    });

    return new ResponseOptions(
      true,
      `Berhasil mengindeks dokumen dengan ID ${id}`,
      null
    );
  } catch (error) {
    console.log("indexDoc error: ", error.message);

    return new ResponseOptions(
      false,
      `Gagal mengindeks dokumen dengan ID ${id}`,
      null
    );
  }
};

export const getDoc = async (id) => {
  try {
    const result = await client.get({
      index,
      id,
    });

    const data = result.body._source;

    return new ResponseOptions(
      true,
      `Berhasil mendapatkan dokumen dengan ID ${id}`,
      data
    );
  } catch (error) {
    console.log("getDoc error: ", error.message);

    return new ResponseOptions(
      false,
      `Gagal mendapatkan dokumen dengan ID ${id}`,
      null
    );
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

    const { hits } = result.body;
    const products = hits.hits.map((hit) => hit._source);
    const data = {
      products,
      aggregations: {
        total_in_stock: hits.total.value,
        count_by_category: [
          { key: "Pakaian", doc_count: 10 },
          { key: "Elektronik", doc_count: 5 },
        ],
        avg_price_by_category: [
          { key: "Pakaian", avg_price: 150000 },
          { key: "Elektronik", avg_price: 500000 },
        ],
      },
      pagination: {
        page: 1,
        totalPages: 5,
        hasNext: true,
      },
    };

    return new ResponseOptions(
      true,
      `Berhasil melakukan pencarian dengan query "${query}"`,
      data
    );
  } catch (error) {
    console.log("searchDoc error: ", error);

    const data = {
      products: [],
      aggregations: {
        total_in_stock: 0,
        count_by_category: [],
        avg_price_by_category: [],
      },
      pagination: {
        page: 1,
        totalPages: 1,
        hasNext: false,
      },
    };

    return new ResponseOptions(
      false,
      `Gagal melakukan pencarian dengan query "${query}"`,
      data
    );
  }
};

export const updateDoc = async (id, doc) => {
  try {
    await client.update({
      index,
      id,
      doc,
    });

    return new ResponseOptions(
      true,
      `Berhasil memperbarui dokumen dengan ID ${id}`,
      null
    );
  } catch (error) {
    console.log("updateDoc error: ", error.message);

    return new ResponseOptions(
      false,
      `Gagal memperbarui dokumen dengan ID ${id}`,
      null
    );
  }
};

export const deleteDoc = async (id) => {
  try {
    await client.delete({
      index,
      id,
    });

    return new ResponseOptions(
      true,
      `Berhasil menghapus dokumen dengan ID ${id}`,
      null
    );
  } catch (error) {
    console.log("deleteDoc error: ", error.message);

    return new ResponseOptions(
      false,
      `Gagal menghapus dokumen dengan ID ${id}`,
      null
    );
  }
};
