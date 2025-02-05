const express = require('express');
const bcrypt = require('bcrypt.js');
const User = require('../models/user');
const router = express.Router();


//Signup Route
router
    .post('/signup', async(req,res) => {
        const { username, firstName, lastName, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, firstName, lastName, password: hashedPassword });
        //Save to database
        await user.save();
        res.status(201).json({message:'User registered successfully'});
    });




    module.exports = router;