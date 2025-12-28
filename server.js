// dotenv
const dotenv = require('dotenv');
dotenv.config();

// mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('count: %d',()=>{
    console.log(`connected to mongoDB ${mongoose.connection.name}`);
});

// express

express = require('express');

const app = express();

// controllers

const petCtrl = require('./controllers/pets');

// middleware
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());


// Routes

app.use('/pets', petCtrl);

//Routes go HERE
app.get('/', async (req, res) => {
    res.json('success');
});

app.listen(3000, () => {
    console.log('The express app is ready!');
});