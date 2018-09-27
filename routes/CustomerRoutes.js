const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Customer = mongoose.model('customer');
//const contactusTemplate = require('../services/emailTemplate/contactusTemplate');

module.exports = app =>{
    
    //Get Customer By ID
    app.get('/api/customer/:customerId', async(req, res) =>{
        var customerid = req.params.customerId
        const customer = await Customer.find({_customer: customerid});

        res.send(customer);
        
    });

    //Get Customer List
    app.get('/api/customers', async(req, res) =>{
        const customers = await Customer.find();

       
       res.send(customers);
      // res.send('test');
        
    });
}