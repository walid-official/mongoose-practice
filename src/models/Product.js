const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0
  },
  imageUrl: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create text index for full-text search
productSchema.index(
  {
    name: 'text',
    description: 'text',
    category: 'text'
  },
  {
    weights: {
      name: 10,
      description: 5,
      category: 3
    },
    name: "product_text_index"
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
