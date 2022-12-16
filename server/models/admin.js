const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: [true, "Email already registered under account"]
    },
    maritalStatus: {
        type: String,
        required: [true, "Please provide a marital status"],
    },
})

module.exports = mongoose.model('Admin', adminSchema);