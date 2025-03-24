const express = require('express');
const Cart = require('../models/Cart.js');
const Order = require('../models/Order.js');
const { verifyToken } = require('../middleware/auth.js');

const router = express.Router();

router.post('/place', verifyToken, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate(
      'products.productId'
    );
    if (!cart || cart.products.length === 0)
      return res.status(400).json({ message: 'Cart is empty' });

    const totalAmount = cart.products.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    const order = new Order({
      userId: req.user.id,
      products: cart.products,
      totalAmount,
    });
    await order.save();

    await Cart.findOneAndDelete({ userId: req.user.id });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error placing order' });
  }
});

router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate(
      'products.productId'
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;
