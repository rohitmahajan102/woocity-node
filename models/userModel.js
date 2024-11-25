const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    age: {type: Number, required: false},
    email: {type: String, required: true, unique: true},
    contact: {type: String, required: false},
    password: {type: String, required: true},
}, {timestamps : true});

const User = mongoose.model('User', userSchema);

module.exports = User;