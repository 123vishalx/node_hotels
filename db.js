const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('Connection error:', err);
});

db.once('open', () => {
    console.log('Connected successfully to MongoDB');
});

module.exports = db;
