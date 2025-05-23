const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create text index for full-text search
userSchema.index(
  {
    name: 'text',
    email: 'text',
    address: 'text'
  },
  {
    weights: {
      name: 10,
      email: 5,
      address: 3
    },
    name: "user_text_index"
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
