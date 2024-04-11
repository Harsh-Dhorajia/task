const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inventoryCount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);
