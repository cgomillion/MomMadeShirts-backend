// Dependencies \\ 

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Middleware \\ 

const whitelist = [process.env.BASEURL];

const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	credentials:true
};

app.use(cors(corsOptions));

// app.set('trust proxy', 1);

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
}));

// Mongoose Config. \\

const db = mongoose.connection;
mongoose.connect(process.env.MONGODBURI,{
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useFindAndModify: false
});


// Listeners
db.on('open', ()=> console.log('DB connected...'));
db.on('error', (error)=> console.log(error.message));
db.on('disconnected', ()=> console.log('Mongoose disconnected...'));

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: "API running..." });
    console.log('Home Page ->')
  });

// Controllers
const productController = require('./controllers/productController');
const userController = require('./controllers/userController')

app.use('/prouducts', productController );

app.use('/users', userController );





app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})