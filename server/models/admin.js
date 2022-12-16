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

adminSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if (error) {
            return callback(error)
        } else {
            callback(null, isMatch)
        }
    })
}

module.exports = mongoose.model('Admin', adminSchema);