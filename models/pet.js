// models/pet.js
//require the mongoose schema
const mongoose = require('mongoose');

// create the mongoose schema
const petSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: String,
});

// initialize the mongoose model

const Pet = mongoose.model('Pet', petSchema);

// export the model

module.exports = Pet;
