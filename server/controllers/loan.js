const Loan = require('../models/loan')

const calculateSimpleInterest = (amount, rate, term) => {
    return (amount * rate * term) / 100;
}

addNewLoan = (req, res) => {
    const loan = new Loan({
        customer: req.body.customer,
        amount: req.body.amount,
        interestRate: req.body.interestRate,
        term: req.body.term,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });

    // Calculate simple interest on the loan amount
    const interest = calculateSimpleInterest(loan.amount, loan.interestRate, loan.term);

    loan.simpleInterest = interest;



    loan.save((err) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(loan);
    });
}


module.exports = {
    addNewLoan
}
