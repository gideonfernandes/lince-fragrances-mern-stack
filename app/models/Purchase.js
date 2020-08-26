const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  order: [{}],
  total: {
    type: Number,
    required: true,
  },
});

module.exports = Purchase = mongoose.model('Purchase', PurchaseSchema);
