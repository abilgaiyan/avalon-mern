const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerPhoneSchema = require('./CustomerPhones');


module.exports = app =>{


     //Get Customer Telephonic Communication
     app.get('/api/customerphones/:customerId', async(req, res) =>{
         var customerid = req.params.customerId
        const customerphones = await Customer.find({_customer: customerid});

        res.send(customerphones);
        
    });
   
    //Post Request to Customer Telephonic Communication
    app.post('/api/customerphones', async (req,res) =>{
        const {message} = req.body;
        const CustomerPhones = new CustomerPhoneSchema({
            message,
            _customer: req.customerId,
            dateSend: Date.now()
            
        });

        //Save Data
        await CustomerPhones.save();
    });
}