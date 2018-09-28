const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerQueriesSchema = require('../models/CustomerQueries');


module.exports = app =>{


     //Get Customer Queries Communication
     app.get('/api/customerqueries/:customerId', async(req, res) =>{
         var customerid = req.params.customerId
        const customerqueries = await Customer.find({_customer: customerid});

        res.send(customerqueries);
        
    });
   
    //Post Request to Customer Queries Communication
    app.post('/api/customerqueries', async (req,res) =>{
        const {message} = req.body;
        const CustomerQueries = new CustomerQueriesSchema({
            message,
            _customer: req.customerId,
            dateSend: Date.now()
            
        });

        //Save Data
        await CustomerQueries.save();
    });
}