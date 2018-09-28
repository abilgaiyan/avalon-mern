const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerEmail = mongoose.model('customeremail');



module.exports = app =>{


     //Get Customer Email Communication
     app.get('/api/customeremail/:customerId', async(req, res) =>{
         var customerid = req.params.customerId
        const customeremail = await Customer.find({_customer: customerid});

        res.send(customeremail);
        
    });
   
   
    // subject: String,
    // message: String,
    // _customer: {type: Schema.Types.ObjectId, ref: 'customer'},
    // displayorder: {type: Number, default:0},
    // emaildate: Date,
    // status: String,
    // createDate: Date,
    // updateDate: Date  
   
    //Post Request to Customer Email Communication
    app.post('/api/customeremail', async (req,res) =>{

        console.log('/api/customeremail',req.body )
        const {subject,message} = req.body;
        const CustomerEmaildata = new CustomerEmail({
            subject,
            message,
            _customer: req.customerId,
            displayorder:0,
            status:'Active',
            createDate:Date.now(),
            updateDate: Date.now()  

           
        });

        //Save Data
        await CustomerEmaildata.save();
        res.end();
    });
}