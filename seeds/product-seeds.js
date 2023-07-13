const { Product } = require('../models');

const productData = [
  {
    product_name: "Baseball shirt", 
    price: 5.99,
    stock: 100,
    category_id: 1,

    
  },
  {
    product_name: "Baseball shorts", 
    price: 10.99,
    stock: 100,
    category_id: 2,

    
  },
  {
    product_name: "Baseball music", 
    price: 15.99,
    stock: 100,
    category_id: 3,

    
  },
  {
    product_name: "Baseball Hat", 
    price: 25.99,
    stock: 100,
    category_id: 4,

    
  },
  {
    product_name: "Baseball shoes", 
    price: 35.99,
    stock: 100,
    category_id: 5,

    
  }

  


 
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
