const express = require('express');
const products = express.Router();
const productModel = require('../models/productModel');
// const userModel = require('../models/userModel');

// seed route
products.get('/seed', (req, res) => {
	productModel.create([    
		{
            type: "tshirt",
            product: {
                name: "Tattoos, Pretty Eyes, and Thick Thighs Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Ash Gray", "White", "Black"],   
                size: ["Small (Mens)","Medium (Mens)","Large (Mens)", "XL (Mens)", "2X (Mens)"], 
                img: "https://i.etsystatic.com/17860400/r/il/ca29cd/2265751148/il_1588xN.2265751148_jxcy.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange.",
                price: "$24.99"
            }
        },
		{
            type: "tshirt",
            product: {
                name: "She's a J. Cole Verse tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White", "Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL", "Men's 2XL", "Men's 3XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/aa589d/2136708430/il_1588xN.2136708430_s36o.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
		{
            type: 'tanktop',
            product: {
                name: 'test tank top one', 
                brand: 'my brand', 
                color: 'brown',   
                size: 'medium', 
                img: 'url.com',
                description: 'test tank top desc.',
                price: '$8'
            }
		},
        {
            type: 'hoodie',
            product: {
                name: 'test hoodie one', 
                brand: 'my brand', 
                color: 'green',   
                size: 'small', 
                img: 'url.com',
                description: 'test hoodie desc.',
                price: '$20'
            }
		},
    ],
	(err, data) => {
    if(err) {
      console.log(err)
    } else {
    res.send(data)
    console.log('seed data created')
    }
  })
})

// ----------- INDEX ROUTES -------------

// GET (index) list of all Products
products.get('/products', (req, res)=>{
    // res.send('Get route is working!!!');

    productModel.find({}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// GET (index) list of all TSHIRTS
products.get('/tshirts', (req, res)=>{
    // res.send('Get route is working!!!');

    productModel.find({ type: 'tshirt'}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// GET (index) list of all TANKTOPS
products.get('/tanktops', (req, res)=>{
    // res.send('Get route is working!!!');

    productModel.find({ type: 'tanktop'}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// GET (index) list of all SWEATSHIRTS
products.get('/sweatshirts', (req, res)=>{
    // res.send('Get route is working!!!');

    productModel.find({ type: 'sweatshirt'}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// GET (index) list of all HOODIES
products.get('/hoodies', (req, res)=>{
    // res.send('Get route is working!!!');

    productModel.find({ type: 'hoodie'}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// ----------------------------------------


// SHOW ROUTE
products.get('/:id', (req, res) => {
    productModel.findById( req.params.id, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else {
            res.status(200).json(foundProducts)
        }
    })
})



// POST ROUTE (For when I submit the New Product on the Front-End)
products.post('/', (req, res)=>{

    productModel.create(req.body, (error, createdProduct) => {
        if (error){
            res.status(400).json({error: error.message})
        }
        else{
            res.status(201).json(createdProduct)
        }
    })

})

// DELETE ROUTE 
products.delete('/:id', (req, res)=>{

    productModel.findByIdAndDelete(req.params.id, (error, deletedProduct)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        else if (deletedProduct === null){
            res.status(404).json({message: 'Product not Found'})
        }
        else{
            res.status(200).json({message: `Prod. ${deletedProduct.make} deleted successfully`})
        }
    })
})


// UPDATE ROUTE
products.put('/:id', (req, res)=>{

    productModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedProduct)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        else{
            res.status(200).json({
                message: `Prod. ${updatedProduct.id} updated successfully`,
                data: updatedProduct
            })
        }
    })
})









module.exports = products;