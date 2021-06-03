const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const usersModel = require('../models/userModel');

// POST ROUTE sign up
users.post('/signup', (req, res) => {
    // Search through existing Users to see if username exists already
    usersModel.findOne({username: req.body.username}, (error, foundUser) => {
        if(error) {
            console.log(error)
        }
            console.log(foundUser)
        if(foundUser) {
            console.log('User already exists')
            res.status(401).json({error: 'User already exists'})
    
    } else {
            // hashing and salting the password
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        //  Create the New User
        usersModel.create(req.body, (error, createdUser) =>{
            if(error){
                res.status(400).json({error: error.message})
            } else {
                // Set user to a variable to delete the password upon creation
                const userData = createdUser.toObject()
                delete userData.password
                req.session.currentUser = createdUser
                res.status(201).json(userData)
            }
        })
    }
})
})


// USER LOGIN ROUTE (CREATE SESSION ROUTE)
users.post('/login', (req, res) => {
    // Find the User you are trying to Login as
    usersModel.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            res.send(err)
        }
        else {
            if (foundUser) {
                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                    //login user and create session
                    req.session.currentUser = foundUser
                    console.log("user has been logged in")
                    res.status(200).json(foundUser)
                }
                else {
                    res.status(404).json({ error: 'User Not Found' })
                }
            }
            else {
                res.status(400).json({ error: err })
            }
        }
    })
})


users.delete('/logout', (req, res) => {
    // Logs out the User
    req.session.destroy(() => {
        res.status(200).json({ msg: 'users logged out' })
    })
})

module.exports = users;
