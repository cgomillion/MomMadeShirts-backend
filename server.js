//DEPENDENCIES
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors')
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// MIDDLEWARE
// SETUP CORS
const whitelist = ['http://localhost:3000', 'https://git.heroku.com/proj4-mommadecustoms-react.git']
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	credentials:true
}
app.use(cors(corsOptions))

app.set('trust proxy', 1) // trust first proxy

// creates "req.session"
app.use(session({
	secret: process.env.SECRET,
	resave: false, 
	saveUninitialized: false, 
	store: new MongoDBStore({
		uri: process.env.MONGODBURI,
		collection: 'mySessions'
	}),
	cookie:{
		sameSite: 'none',
		secure: true
	}
}))

// MONGOOSE SETUP
const db = mongoose.connection;
mongoose.connect(process.env.MONGODBURI,{
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useFindAndModify: false
});


// set up database listeners for the terminal
db.once('open', ()=> console.log('DB connected...'));
db.on('error', (error)=> console.log(error.message));
db.on('disconnected', ()=> console.log('Mongoose disconnected...'));

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.status(403).json({msg:"login required"})
    }
}
// this will create the req.body object.
app.use(express.json());


// test server is running and home page displays something
app.get("/", (req, res) => {
    res.json({ message: "API running..." });
    console.log('Home Page ->')
  });

// Controllers
// Products 
app.use('/products', require('./controllers/productController') );

// Users
app.use('/user', require('./controllers/userController') );

// Sessions
app.use('/sessions', require('./controllers/sessionsController') );



app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
    
})