const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/chatApp';

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Cannot connect to MongoDB: ', error));

module.exports = mongoose;
