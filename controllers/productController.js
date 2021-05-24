const express = require('express');
const product = express.Router();
const Product = require('../models/productModel');
// const userModel = require('../models/userModel');

// seed route
product.get('/seed', (req, res) => {
	Product.create(
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
product.get('/', (req, res)=>{
    //res.send('Get route is working!!!')
    Product.find({}, (error, foundProducts)=>{
        if (error){
            res.status(400).json(error)
        }
        else{
            res.status(200).json(foundProducts)
        }
    })
})

// POST ROUTE
product.post('/', (req, res)=>{

    Product.create(req.body, (error, createProduct)=>{
        if (error){
            res.status(400).json({error: error.message})
        }
        else{
            res.status(201).json(createProduct)
        }
    })

})

// DELETE ROUTE
product.delete('/:id', (req, res)=>{

    Product.findByIdAndDelete(req.params.id, (error, deletedProduct)=>{
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
product.put('/:id', (req, res)=>{

    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedProduct)=>{
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










module.exports = product;