// controllers/pets.js
// require the model
const Pet = require('../models/pet.js');

// require express
const express = require('express');

// initialize the router
const router = express.Router();

// Routes/Controllers Functions HERE

// POST + /pets/
router.post('/', async (req, res) => {
    try {
        // use the model to insert data into DB
        const pet = await Pet.create(req.body);
        // respond new pet data
        res.status(201).json({ pet });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: 'failed to create pet!' });
    }
});

// GET + /pets/
router.get('/', async (req, res) => {
    try {
        res.json('success');
    } catch (err) {

    }
});

// export the router
module.exports = router;