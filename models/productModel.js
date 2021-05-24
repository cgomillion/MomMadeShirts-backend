const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({ 
    type: {type: String, required: true},
    product: {
        name: {type: String, required: true}, 
        brand: {type: String, required: true}, 
        color: String,   
        size: {type: String, required: true}, 
        img: String,
        description: String,
        price: Number
    }
});

const Product = model('Product', productSchema);

module.exports = Product;