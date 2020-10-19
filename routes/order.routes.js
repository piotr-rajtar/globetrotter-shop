const express = require('express');
const router = express.Router();

const order = require('../controllers/order.controller');

router.post('/order/add', order.addNewOrder);

router.get('/order/get/all', order.getAllOrders);

router.get('/order/get/:id', order.getOrderById);

module.exports = router;