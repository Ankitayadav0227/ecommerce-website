const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, price, image, description } = req.body;

  const product = new Product({
    name,
    price,
    image,
    description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});
module.exports = router;