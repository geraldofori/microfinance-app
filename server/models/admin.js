const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: [true, "Email already registered under account"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
})

module.exports = mongoose.model('Admin', adminSchema);