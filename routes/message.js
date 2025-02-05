const express = require('express');
const RoomMessage = require('../models/groupMessage');
const PrivateMessage = require('../models/privateMessage');


const router = express.Router();

//Send message
//Send private message
router.post('/sendPrivate', async (req, res) => {

    const { from_user, message} = req.body;
    try{
        const newMessage = await Message.create({ from_user, to_user, message, type: 'private' });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Send message in the room
router.post('/sendRoom', async (req, res) => {
    const { from_user, message } = req.body;
    try {
        const newMessage = await Message.create({ from_user, message, type: 'group' });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Get chat history
//Get chat history from private chat

router.get('/history/:from_user/:to_user', async (req, res) => {
    const { from_user, to_user } = req.params;
    try {
        const messages = await Message.find({
            $or: [
                { from_user, to_user },
                { from_user: to_user, to_user: from_user },
            ],
            type: 'private',
        }).sort({ timestamp: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//Room Chat

router.get('/history', async (req, res) => {
    try {
        const messages = await Message.find({ type: 'group' }).sort({ timestamp: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

