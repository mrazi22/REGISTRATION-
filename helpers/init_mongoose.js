const mongoose = require('mongoose');

// Ensure correct environment variable access method (replace with your actual setup)
const dotenv = require('dotenv'); // If using a .env file
dotenv.config(); // Load environment variables from .env file (if applicable)

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TRIAL'; // Default connection string
const DB_NAME = process.env.DB_NAME || 'TRIAL'; // Default database name

mongoose.connect(MONGODB_URI, {
  dbName: DB_NAME
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => console.error('Error connecting to MongoDB:', err.message)); // Handle error with better message
