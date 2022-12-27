const express = require('express')

const CustomerController = require('../controllers/customer')
const AdminController = require('../controllers/admin')
const LoanController = require('../controllers/loan')

const router = express.Router()

router.post('/register', CustomerController.createCustomer)
router.post('/login', CustomerController.getCustomer)
router.post('/admin/login', AdminController.getAdmin)
router.get('/customers', CustomerController.getCustomers)
router.post('/loans', LoanController.addNewLoan);

module.exports = router