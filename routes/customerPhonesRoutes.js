const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerPhones = mongoose.model('customerphones');


module.exports = app =>{


     //Get Customer Telephonic Communication
     app.get('/api/customerphones/:customerId', async(req, res) =>{
         var customerid = req.params.customerId
        const customerphones = await CustomerPhones.find({_customer: customerid});
        res.send(customerphones);
       
    });
   
    //Post Request to Customer Telephonic Communication
    app.post('/api/customerphones', async (req,res) =>{
        const {subject,message,customerId } = req.body;
        const CustomerPhonesData = new customerphones({
            subject,
            message,
            _customer: customerId,
            displayorder:0,
            status:'Active',
            createDate:Date.now(),
            updateDate: Date.now()  
            
        });

        //Save Data
        await CustomerPhonesData.save();
        res.end();
    });
}