const mongoose = require('mongoose');
const loadTestData = require('./testData');

/* LOADING DB */
const connectToDB = () => {

  // connect to DB
  const dbURI = process.env.NODE_ENV ==='production'
    ? `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.n3z6t.mongodb.net/globetrotterShop?retryWrites=true&w=majority`
    : 'mongodb://localhost:27017/globetrotterShop';
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Successfully connected to the database');
    loadTestData();
  });

  // on error
  db.on('error', err => console.log('Error: ' + err));
}

module.exports = connectToDB;