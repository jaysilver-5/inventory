const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/', async (req, res) => {
  try {
    const { name, description, categoryId, price, quantity } = req.body;
    const item = new Item({
      name,
      description,
      category: categoryId,
      price,
      quantity,
    });
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Define other item routes

module.exports = router;
