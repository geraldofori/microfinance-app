const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a first Name"],
        unique: false,
    },
    lastName: {
        type: String,
        required: [true, "Please provide a last Name!"],
        unique: false,
    },
    maritalStatus: {
        type: String,
        required: [true, "Please provide a marital status"],
        unique: false,
    },
    employmentStatus: {
        type: String,
        required: [true, "Please provide a employment status"],
        unique: false,
    },
    nameOfEmployer: {
        type: String,
        required: [true, "Please provide name of Employer"],
        unique: false
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please provide a date of birth"],
        unique: false,
    },
    cardType: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Card already exists with a customer"]
    },
    address: {
        type: String,
        required: [true, "Please provide an address!"],
        unique: false,
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please provide a phone number"],
        unique: [true, "Phone number already exists with a customer"]
    },
})

module.exports = mongoose.model('Customer', customerSchema);