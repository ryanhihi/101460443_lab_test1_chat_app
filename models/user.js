const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'username was taken, please choose a different one'],
        required: [true, 'Username is required']
    },
    firstName: {
        type: String,
        required: [true, 'Please provide your first name']
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    createon: {
        type: Date,
        default: Date.now
    }

});

const user = mongoose.model("User", userSchema)
module.exports = user;