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
    res.json(req.body);
});

// GET + /pets/
router.get('/', async (req, res) => {
    res.json('success');
});

// export the router
module.exports = router;