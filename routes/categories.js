const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.post('/', async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    await category.save();
    res.send(category);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Define other category routes

module.exports = router;
