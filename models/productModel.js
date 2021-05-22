const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({ 
    name: {type: String, required: true}, 
    brand: {type: String, required: true}, 
    color: String,   
    size: {type: String, required: true}, 
    img: String,
    description: String,
    price: Number
});

module.exports = model('Product', productSchema);