const mongoose = require("mongoose");


const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last Name!"],
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: [true, "Email already registered under account"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    maritalStatus: {
        type: String,
        required: [true, "Please provide a marital status"],
    },
    employmentStatus: {
        type: String,
        required: [true, "Please provide a employment status"],
    },
    nameOfEmployer: {
        type: String,
        required: [true, "Please provide name of Employer"],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please provide a date of birth"],
    },
    cardType: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Card already exists with a customer"]
    },
    address: {
        type: String,
        required: [true, "Please provide an address!"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please provide a phone number"],
        unique: [true, "Phone number already exists with a customer"]
    },
})

module.exports = mongoose.model('Customer', customerSchema);