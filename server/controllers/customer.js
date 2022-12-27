const Customer = require('../models/customer')

createCustomer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No customer available',
        })
    }

    const customer = new Customer(body)

    if (!customer) {
        return res.status(400).json({ success: false, error: err })
    }

    customer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: customer._id,
                message: 'New Customer Created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No Customer Created',
            })
        })
}


getCustomer =  (req, res) => {
    Customer.findOne({email: req.email}, (error, customer) => {
        if (error) {
            res.status(500).send(error);
        } else if (!customer) {
            res.status(404).send('User not found');
        } else {
            if (customer.password === password) {
                res.send('Successfully logged in');
            } else {
                res.send('Incorrect password');
            }
        }
    });
}

getCustomers = async (req, res) => {
    await Customer.find({}, (err, customers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!customers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Customers not found` })
        }
        return res.status(200).json({ success: true, data: customers })
    }).catch(err => console.log(err))
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomer,
}
