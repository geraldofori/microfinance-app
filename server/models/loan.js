const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    simpleInterest: {
        type: Number,
        required: true
    },
    term: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('Loan', loanSchema);