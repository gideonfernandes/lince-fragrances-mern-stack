const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Stock = mongoose.model('Stock', StockSchema);
