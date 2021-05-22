const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const cartSchema = new Schema({
    name: {type: String, required: true}, 
    brand: {type: String, required: true}, 
    color: String,  
    size: {type: String, required: true}, 
    img: String,
    description: String,
    price: Number,
    qty: Number
});

module.exports = model('Cart', cartSchema);