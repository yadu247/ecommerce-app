const express = require('express');
const { verifyToken, verifyAdmin } = require('../middleware/auth.js');
const Order = require('../models/Order.js');

const router = express.Router();

router.get('/orders', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

module.exports = router;
