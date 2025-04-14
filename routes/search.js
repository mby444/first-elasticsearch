import { Router } from "express";

export const searchRouter = Router();

searchRouter.get("/", (req, res) => {
  //   res.json([
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //     {
  //       name: "Laptop ASUS ROG",
  //       category: "Laptop Gaming",
  //       description: "",
  //       price: "Laptop gaming dengan spesifikasi tinggi",
  //       in_stock: true,
  //     },
  //   ]);
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
