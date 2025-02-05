const express = require('express');
const PrivateMessage = require('../models/privateMessage');
const router = express.Router();

// Send a private message
router.post('/sendPrivate', async (req, res) => {
    const { from_user, to_user, message } = req.body;

    try {
        const newMessage = new PrivateMessage({
            from_user,
            to_user,
            message,
            timestamp: new Date()
        });
        await newMessage.save();
        res.status(201).json({ message: 'Private message sent successfully', data: newMessage });
    } catch (error) {
        res.status(500).json({ error: 'Error sending private message' });
    }
});

// Get private message history between users
router.get('/history/:from_user/:to_user', async (req, res) => {
    const { from_user, to_user } = req.params;

    try {
        const messages = await PrivateMessage.find({
            $or: [
                { from_user, to_user },
                { from_user: to_user, to_user: from_user }
            ]
        }).sort({ timestamp: -1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving message history' });
    }
});

module.exports = router;
