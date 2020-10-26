const Order = require('../models/order.model');
const emailParser = require('../utils').emailParser;
const phoneParser = require('../utils').phoneParser;
const nameParser = require('../utils').nameParser;

exports.addNewOrder = async (req, res) => {
    try {
        const { name, message, email, phone, preferredContact, totalCost } = req.body;

        let orderCheck = false;
        let orderErrorCheck = false;

        req.body.orderDetails.map(order => {
          delete order.photo;
          if(order.quantity > 0 && order.quantity < 1000 && order.finalPrice > 0 && order.comment.length <= 100) orderCheck = true;
          else {
            orderErrorCheck = true;
          }
        });
        
        const emailCheck = emailParser(email);
        const phoneCheck = phoneParser(phone);
        const nameCheck = nameParser(name);

        if(
          name
          && nameCheck
          && email
          && emailCheck
          && phone
          && phoneCheck
          && preferredContact
          && name.length > 7
          && name.length <= 30
          && message.length <= 100
          && totalCost > 0
          && req.body.orderDetails.length > 0
          && orderCheck
          && !orderErrorCheck
        ) {
          const newOrder = new Order({ ...req.body });
          await newOrder.save();
          res.json(newOrder);
        } else {
          throw new Error('Wrong input');
        }
    }  
    catch(err) {
        res.status(500).json(err);
    }
};

exports.getAllOrders = async (req, res) => {
  try {
    const result = await Order
    .find()
    .sort({ ordered: -1 });

    if(!result) res.status(404).json({ message: 'Orders not found' });
    else {
      res.json(result);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);

    if(!result) res.status(404).json({ message: 'Order not found' });
    else {
      res.json(result);
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
};