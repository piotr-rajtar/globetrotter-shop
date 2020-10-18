const express = require('express');
const router = express.Router();

const product = require('../controllers/product.controller');

router.get('/product', product.getAllProducts);

router.get('/product/:id', product.getProductById);

module.exports = router;