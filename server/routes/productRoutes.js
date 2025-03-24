const express = require('express');
const Product = require('../models/Product.js');
const { verifyToken, verifyAdmin } = require('../middleware/auth.js');

const router = express.Router();

router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    const product = new Product({ name, description, price, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

module.exports = router;
