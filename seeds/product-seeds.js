const {Product} = require('../models');

const productdata = [

{
    product_name: 'MLB logo t-shirt',
    price: 9.99,
    stock: 20,
    category_id: 1, 
},
    {
    product_name: 'Cleated Baseball Shoes',
    price: 75.00,
    stock: 25,
    category_id: 2,
    },
{
    product_name: 'MLB Hat',
    price: 29.99,
    stock: 30,
    category_id: 3,
    },
{
    product_name: 'Replica MLB Baseball Gloves',
    price: 99.99,
    stock: 15,
    category_id: 4,
    },
{   
        product_name: 'MLB Baseball Hat',
    price: 22.99,
    stock: 20,
    category_id: 4,
},
]

const seedProducts = () => Product.bulkCreate(productdata);
module.exports = seedProducts;





