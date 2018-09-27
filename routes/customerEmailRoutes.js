const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerEmailSchema = require('./CustomerEmail');


module.exports = app =>{


     //Get Customer Email Communication
     app.get('/api/customeremail/:customerId', async(req, res) =>{
         var customerid = req.params.customerId
        const customeremail = await Customer.find({_customer: customerid});

        res.send(customeremail);
        
    });
   
    //Post Request to Customer Email Communication
    app.post('/api/customer', async (req,res) =>{
        const {message} = req.body;
        const CustomerEmail = new CustomerEmailSchema({
            message,
            _customer: req.customerId,
            dateSend: Date.now()
            
        });

        //Save Data
        await CustomerEmail.save();
    });
}