const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    token: {
        type: String,
        required: true
    }
})

const createUser = mongoose.model('user', userSchema);

module.exports = createUser;