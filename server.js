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

// middleware
const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.json());

app.listen(3000, () => {
    console.log('The express app is ready!');
});