import { Router } from "express";
import { searchDoc } from "../utils/elasticsearch.js";

export const searchRouter = Router();

searchRouter.get("/", async (req, res) => {
  const { q, category, sort, page } = req.query;
  console.log("q", q);
  const result = await searchDoc(q, category, sort, page);
  console.log("result", result);
  // res.json(result);

  res.json({
    products: [
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
      {
        name: "Kipas Angin",
        category: "Elektronik",
        description: "Kipas angin hemat daya",
        price: 200000,
        in_stock: true,
      },
    ],
    aggregations: {
      total_in_stock: 15,
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
      page: 2,
      totalPages: 5,
      hasNext: true,
    },
  });
});
