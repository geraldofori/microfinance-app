const express = require('express')

const CustomerController = require('../controllers/customer')

const router = express.Router()

router.post('/customer', CustomerController.createCustomer)
router.get('/customer/:id', CustomerController.getCustomerById)
router.get('/customers', CustomerController.getCustomers)

module.exports = router