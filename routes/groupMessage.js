const express = require('express');
const GroupMessage = require('../models/groupMessage');
const router = express.Router();

// Send a group message
router.post('/sendRoom', async (req, res) => {
    const { from_user, message } = req.body;

    try {
        const newMessage = new GroupMessage({
            from_user,
            message,
            timestamp: new Date()
        });
        await newMessage.save();
        res.status(201).json({ message: 'Group message sent successfully', data: newMessage });
    } catch (error) {
        res.status(500).json({ error: 'Error sending group message' });
    }
});

// Get the group message history
router.get('/history', async (req, res) => {
    try {
        const messages = await GroupMessage.find().sort({ timestamp: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving group message history' });
    }
});

module.exports = router;
