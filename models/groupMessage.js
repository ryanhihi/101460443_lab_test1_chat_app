const mongoose = require('mongoose');

const groupMessageSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: [true, 'from username is required']
    },
    room: {
        type: String
    },
    message: {
        type: String
    },
    date_sent: {
        type: Date,
        default: Date.now
    }

});

const user = mongoose.model("GroupMessage", groupMessageSchema)
module.exports = groupMessageSchema;