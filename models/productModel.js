const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({ 
    type: {type: String, required: true},
    product: {
        name: {type: String, required: true}, 
        brand: {type: String, required: true}, 
        color: [{type: String}],   
        size: [{type: String, required: true}], 
        img: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: String, required: true}
    }
});


module.exports = model('Product', productSchema);