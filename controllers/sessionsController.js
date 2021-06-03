const bcrypt = require('bcrypt');
const express = require('express');
const sessions = express.Router();
const User = require('../models/userModel');

//session new route --> needs to be a post route
sessions.get('/new', (req,res) => {
	// Connect with react
	res.send(console.log('new session'))
})

// USER Login
sessions.post('/', (req,res) => {
    // Find User by Username
	User.findOne({ username: req.body.username}, (err, foundUser) => {
		if (err) {
            // Error
			res.send(err)
		} else if (!foundUser){
            // User is Not Found
			res.send(console.log('user not found'))
				} else {
                    // Compare passwords for corresponding User
					if (bcrypt.compareSync(req.body.password, foundUser.password)) {
						req.session.currentUser = foundUser
						res.send(console.log('User exists'))
			} else {
                // Send message if passwords don't match to the console
				res.send(console.log("Password doesn't match"))
			}
		}
	})
})

sessions.delete('/', (req,res) => {
    // Kills the session
	req.session.destroy(()=> {
		res.send(console.log('Session is over. . .'))
	})
})

module.exports = sessions;