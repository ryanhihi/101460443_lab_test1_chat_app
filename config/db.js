const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/chatApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to Mongo DB'))
.catch((error) => console.error('Cannot connect to MongoDB: ', error));

module.exports = mongoose;