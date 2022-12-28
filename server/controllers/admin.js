const Admin = require('../models/admin')


getAdmin =  (req, res) => {
    const { email, password } = req.body;

    Admin.findOne({email}, (error, customer) => {
        if (error) {
            res.status(500).send(error);
        } else if (!customer) {
            res.status(404).send('Admin not found');
        } else {
            if (customer.password === password) {
                res.send('Successfully logged in');
            } else {
                res.send('Incorrect password');
            }
        }
    });
}


module.exports = {
    getAdmin
}
