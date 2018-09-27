const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerAllData = mongoose.model('customerdata');
//const contactusTemplate = require('../services/emailTemplate/contactusTemplate');

module.exports = app =>{
    //Get Customer all data List
    app.get('/api/customeralldata', async(req, res) =>{
        const customeralldata = await CustomerAllData.find({});
        //console.log(customeralldata);
        res.send(customeralldata);
        
    });


    app.get('/api/customeralldatabyid/:customerid', async(req, res) =>{
        console.log(req.params.customerid);

        if (req.params.customerid) {
           
        const customeralldata = await CustomerAllData.find({_id:req.params.customerid});
        //console.log(customeralldata);
        res.send(customeralldata);
        }
    });

    
}