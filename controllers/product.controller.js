const Product = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
    try {
        const result = await Product
        .find()
        .select('name price photo')
        .sort({ type: 1 });

        if(!result) res.status(404).json({ message: 'Product not found' });
        else {
            res.json(result);
        }  
    }
    catch(err) {
        res.status(500).json(err);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const result = await Product.findById(req.params.id);
        const arrayResult = [];

        if(!result) res.status(404).json({ message: 'Product not found' });
        else {
            arrayResult.push(result);
            res.json(arrayResult);
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
};