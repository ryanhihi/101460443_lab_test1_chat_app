const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, firstName, lastName, password } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ error: 'Username already taken' });

        // Hash the password 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user and save to the database
        const newUser = new User({
            username,
            firstName,
            lastName,
            password: hashedPassword
        });

        await newUser.save();

        // Send success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' });
    }
});

module.exports = router;