const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'Username is taken, please choose a different one'],
        required: [true, 'Username is required']
    },
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']  
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();  

    try {
        const salt = await bcrypt.genSalt(10);  
        this.password = await bcrypt.hash(this.password, salt);  
        next();
    } catch (err) {
        next(err);
    }
});

// Compare input password with stored hashed password
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
