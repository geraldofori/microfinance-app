const express = require('express')

const CustomerController = require('../controllers/customer')
const LoanController = require('../controllers/loan')

const router = express.Router()

router.post('/customer', CustomerController.createCustomer)
router.get('/customer/:id', CustomerController.getCustomerById)
router.get('/customers', CustomerController.getCustomers)
router.post('/loans', LoanController.addNewLoan);

module.exports = router