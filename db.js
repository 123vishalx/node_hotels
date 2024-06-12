const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://localhost:27017/hotels';
// const mongoURL = 'mongodb+srv://vishalshiwani2003:vishal123cluster0.xceanfb.mongodb.net/'
// const mongoURL = ''
// mongodb+srv://vishalshiwani2003:vishal123@cluster0.xceanfb.mongodb.net/
const mongoURL = process.env.MONGODB_URL;

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
