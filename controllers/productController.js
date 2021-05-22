const express = require('express');
const products = express.Router();
const productModel = require('../models/productModel');
const userModel = require('../models/userModel');

products.get('/', (req, res) => {
    res.send(`<h1>Testing get route!, Route working if seen</h1>`);
    console.log('Get route hit')
})








module.exports = products;