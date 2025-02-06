const express = require('express');
const router = express.Router();
const User = require('../models/user');  // Ensure the path to your model is correct

// POST route to handle sign up
router.post('/', async (req, res) => {
    const { username, firstName, lastName, password } = req.body;

    
    if (!username || !firstName || !lastName || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken' });
        }

        const newUser = new User({ username, firstName, lastName, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

module.exports = router;
