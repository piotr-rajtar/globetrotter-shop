const Product = require('./models/product.model');

const loadTestData = async () => {

  const data = [
    {
      name: 'Trekking backpack',
      type: 'backpack',
      price: 200,
      photo: ['backpack1.jpg', 'backpack2.jpg', 'backpack3.jpg'],
      description: 'Legendary construction used for only one purpose, to keep GlobeTrotting for all day long!',
    },
    {
      name: 'Winter Jacket',
      type: 'jacket',
      price: 250,
      photo: ['jacket1.jpg', 'jacket2.jpg', 'jacket3.jpg'],
      description: 'Perfect for skitouring, cross country skiing or dynamic trenings. All of this activities will take adventage of termic support from our product!',
    },
    {
      name: 'Trekking trousers',
      type: 'trousers',
      price: 150,
      photo: ['trousers1.jpg', 'trousers2.jpg', 'trousers3.jpg'],
      description: 'Ideal choice for all-season trails! Hiking, via ferrata and climbing will not be a problem for you!',
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading example data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test data`, err);
  }

};

module.exports = loadTestData;
