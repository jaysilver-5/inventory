const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  quantity: Number,
});

module.exports = mongoose.model('Item', itemSchema);
