const express = require('express');
const products = express.Router();
const productModel = require('../models/productModel');
// const userModel = require('../models/userModel');

// seed route
products.get('/seed', (req, res) => {
	productModel.create([    
		{
            type: 'tshirt',
            product: {
                name: 'test shirt one', 
                brand: 'my brand', 
                color: 'red',   
                size: 'large', 
                img: 'url.com',
                description: 'test shirt desc.',
                price: 10
            }
		},
		{
            type: 'sweatshirt',
            product: {
                name: 'test sweatshirt one', 
                brand: 'my brand', 
                color: 'yellow',   
                size: 'x-large', 
                img: 'url.com',
                description: 'test sweatshirt desc.',
                price: 15
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
                price: 8
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
                price: 20
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


// GET (index) list of cars
products.get('/', (req, res)=>{
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

// POST ROUTE
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