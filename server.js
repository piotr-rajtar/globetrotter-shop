const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

/* ENDPOINTS ROUTES IMPORT */
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/order.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/globetrotterShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});