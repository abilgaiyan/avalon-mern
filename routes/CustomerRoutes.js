const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Customer = mongoose.model('customer');
//const contactusTemplate = require('../services/emailTemplate/contactusTemplate');

module.exports = app =>{
    app.get('/api/customer', async(req, res) =>{
        const customer = await Customer.find({_user: req.Customer.id});

        res.send(customer);
        
    });
}