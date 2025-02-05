const mongoose = require('mongoose');

const privateMessageSchema = new mongoose.Schema({
    from_user: {
        type: String,
        required: [true, 'from username is required']
    },
    toolbar_user: {
        type: String,
        required: [true, 'to username is required']
    },
    message: {
        type: String
    },
    date_sent: {
        type: Date,
        default: Date.now
    }

});

const user = mongoose.model("PrivateMessage", privateMessageSchema)
module.exports = privateMessageSchema;