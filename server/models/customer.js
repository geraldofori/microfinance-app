const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


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
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: [true, "Email already registered under account"]
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

customerSchema.pre("save", function (next) {
    const customer = this

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                return next(saltError)
            } else {
                bcrypt.hash(customer.password, salt, function(hashError, hash) {
                    if (hashError) {
                        return next(hashError)
                    }

                    customer.password = hash
                    next()
                })
            }
        })
    } else {


        return next()
    }
})

module.exports = mongoose.model('Customer', customerSchema);