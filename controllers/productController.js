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
            type: "tanktop",
            product: {
                name: "VGK Best Mom Ever", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Women's Small", "Women's Medium", "Women's Large", "Women's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/51c3d2/1922232421/il_1588xN.1922232421_m9b3.jpg",
                description: "BEST. MOM. EVER. This is an unofficial Vegas Golden Knights t-shirt. GLITTER Heat Transfer Vinyl After the tanktop has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "DBZ Father's Day Shirt/ Dragon Ball T-Shirt/ Dragon Ball Shirt/Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/145bec/3168604635/il_1588xN.3168604635_rgr6.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Jeep Life Tee /Jeep Life Bun Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/b1b90a/3130944259/il_1588xN.3130944259_lpkq.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Teacher Inspired Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/dc0214/3066260450/il_1588xN.3066260450_genw.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Teacher Life Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/8fdc0d/3066256994/il_1588xN.3066256994_qhjz.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Nurse Life Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/5087d5/3113988575/il_1588xN.3113988575_641b.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Nurse Life Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/3b3888/3113984453/il_1588xN.3113984453_ifpb.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "I Pray Different Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["White","Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/f2a7f1/3066264492/il_1588xN.3066264492_t085.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Educated Vaccinated Caffeinated Dedicated Teacher life/Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/2f9655/3004366138/il_1588xN.3004366138_awlo.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$22.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Back & Body Hurts Tee/ Gag gift shirt/ Dad Shirt/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black", "Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/5b29a6/2847430805/il_1588xN.2847430805_l73c.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Potter Yoda Tee/ Baby Yoda T-Shirt/ Baby Yoda Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/4a1064/2790314765/il_1588xN.2790314765_ckr7.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$24.99"
            }
        },
        {
            type: "sweatshirt",
            product: {
                name: "Home Malone Sweatshirt/ Home Malone T-Shirt/ Post Malone Shirt/ Post Malone Sweatshirt/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/ad52a4/2692769080/il_1588xN.2692769080_l4mk.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$32.99"
            }
        },
        {
            type: "sweatshirt",
            product: {
                name: "LA Dodgers Champs Sweatshirt/Lakers Champs Sweatshirt/ LA Champions Sweatshirt/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black", "Ash Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/6ed783/2692755938/il_1588xN.2692755938_rwmj.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$32.99"
            }
        },
        {
            type: "tanktop",
            product: {
                name: "Mom. Wife. Boss. Tank", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Women's Small", "Women's Medium", "Women's Large", "Women's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/c5856b/2139843160/il_1588xN.2139843160_hat4.jpg",
                description: "Printed when order is sent in, allow 3-5 business days to ship at the most. After the tanktop has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99"
            }
        },
        {
            type: "sweatshirt",
            product: {
                name: "Classy until the puck drops", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/adeb24/1752517692/il_1588xN.1752517692_2rt9.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$22.99"
            }
        },
        {
            type: "tanktop",
            product: {
                name: "Classy until the puck drops", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Women's Small", "Women's Medium", "Women's Large", "Women's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/8c8099/1688915907/il_794xN.1688915907_ruv4.jpg",
                description: "Printed when order is sent in, allow 3-5 business days to ship at the most. After the tanktop has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99"
            }
        },
        {
            type: "sweatshirt",
            product: {
                name: "Birthday VGK baseball tee", 
                brand: "MomMadeCustomTees", 
                color: ["Black and White"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/9ce0c5/1722782123/il_1588xN.1722782123_lghh.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99"
            }
        },
        {
            type: "hoodie",
            product: {
                name: "Texas Unisex/ Texas Girl Hoodie/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black w/ White State", "Gray w/ Black State"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/4a8c05/2150233834/il_1588xN.2150233834_nbbk.jpg",
                description: "Image shown on either a Gildan or Fruit of the Loom brand. Durable hoodie, to keep you warm and cozy so you can represent! After hoodie has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$34.99"
            }
        },
        {
            type: "hoodie",
            product: {
                name: "California Hoodie/ California Girl Hoodie/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black w/ White State", "Gray w/ Black State"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/4ce819/2369498554/il_1588xN.2369498554_tfiw.jpg",
                description: "Image shown on either a Gildan or Fruit of the Loom brand. Durable hoodie, to keep you warm and cozy so you can represent! After hoodie has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$34.99"
            }
        },
        {
            type: "hoodie",
            product: {
                name: "Georgia Hoodie/ Georgia Girl Hoodie/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black w/ White State", "Gray w/ Black State"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/fbb161/2369504624/il_1588xN.2369504624_k7t5.jpg",
                description: "Image shown on either a Gildan or Fruit of the Loom brand. Durable hoodie, to keep you warm and cozy so you can represent! After hoodie has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$34.99"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Dope Black Son Tee/ Youth and Adult SIZE", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/ffbf50/2460337083/il_1588xN.2460337083_pu46.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99+"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Dope Black Daughter Tee/ Youth and Adult SIZE", 
                brand: "MomMadeCustomTees", 
                color: ["Black"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/6346f2/2460338619/il_1588xN.2460338619_1a2z.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99+"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "Fresh Prince of Bel-Air Shirt/ Fresh Prince Shirt/Fresh Prince Tee/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black", "White", "Gray"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/861da3/2692748842/il_1588xN.2692748842_cgk2.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99+"
            }
        },
        {
            type: "tshirt",
            product: {
                name: "DBZ T-Shirt/ Dragon Ball T-Shirt/ Adult Unisex", 
                brand: "MomMadeCustomTees", 
                color: ["Black", "White"],   
                size: ["Men's Small", "Men's Medium", "Men's Large", "Men's XL"], 
                img: "https://i.etsystatic.com/17860400/r/il/eb586a/3120874682/il_1588xN.3120874682_2pou.jpg",
                description: "This shirt is unisex sizing for comfort as it is what we prefer. The image is printed as is, and only on the color options available. Image printed on a Bella Canvas 3001, size charted shown with shirt mock up. Pre-shrunk, Cotton, Jersey and Polyster blend. After shirt has arrived to your home you have 7 days to return the shirt in the condition it came in for an exchange",
                price: "$19.99+"
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