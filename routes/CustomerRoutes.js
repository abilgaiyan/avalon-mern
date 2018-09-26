const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Customer = mongoose.model('customer');
//const contactusTemplate = require('../services/emailTemplate/contactusTemplate');

module.exports = app =>{
    //Get Customer By ID
    app.get('/api/customer', async(req, res) =>{
        const customer = await Customer.find({_customer: req.Customer.id});

        res.send(customer);
        
    });

    //Get Customer List
    app.get('/api/customers', async(req, res) =>{
        const customers = await Customer.find();

       
       res.send(customers);
      // res.send('test');
        
    });
}