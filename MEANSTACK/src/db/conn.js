const mongoose = require('mongoose');

// Your connection URL
const dbURL = 'mongodb://localhost:27017/mydatabase';

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose.connect(dbURL, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
