const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASS;
    const dbName = process.env.DB_NAME; // get db name from .env

    
    const uri = `mongodb+srv://${username}:${password}@cluster0.pxdhv.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
    // console.log(uri);
    
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
