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
        const pets = await Pet.find();
        res.status(200).json({ pets })
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Failed to get pets" });
    }
});

// GET + /pets/123
router.get('/:id', async (req, res) => {
    try {
        // Get the id from the req.params
        const { id } = req.params
        // Use the model to find by id
        const pet = await Pet.findById(id);
        // If we don't get a pet, respond with 404
        if (!pet) {
            res.status(404).json({ error: "Pet not found" });
        } else {
            // Else: Send 200 with pet
            res.status(200).json({ pet });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Failed to get pet" });
    }
});

// DELETE + /pets/123
router.delete('/:id', async (req, res) => {
    try {
        // Get the id from params
        const { id } = req.params;
        // Get the id of pet then delete it by its id
        const pet = await Pet.findByIdAndDelete(id);
        // If there is no pet, then send 404 error
        if (!pet) {
            res.status(404).json({ err: "Pet not found" });
        }
        else {
            // Else send 200 msg to say deleted, use status 204 if you don't send any data
            res.status(200).json({ message: "Pet deleted successfully" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Failed to delete pet" });
    }
});

// PUT + /pets/123
router.put("/:id", async (req, res) => {
    try {
        // Get the id from the req.params
        const { id } = req.params;
        // Get the id of pet then delete it by its id 
        const pet = await Pet.findByIdAndUpdate(id, req.body, {new: true});
        // If the pet doesn't exist, send 404 msg 
        if (!pet) {
            res.status(404).json({ err: "Pet not found" });
        } else {
        // Else send 200 msg
            res.status(200).json({ pet });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: "Failed to updated pet" });
    }
})

// export the router
module.exports = router;