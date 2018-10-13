const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const ProductInfo = mongoose.model('productinfo');

module.exports = app =>{
    //Get Product info data 
    app.get('/api/productinformation/:productinfoid', async(req, res) =>{
        const prodInfoId= req.params.productinfoid;
        const ProductInfo = await ProductInfo.find({_id: prodInfoId});
        //console.log(productinformation);
        res.send(productinformation);
        
    });

    app.post('/api/productinformation',  async (req,res) =>{
        // console.log(req.body);
       const productinfo = new ProductInfo({
        liveDate: req.body.liveDate,
        ashiProductStatus: req.body.ashiProductStatus,
        restrictionFrom: req.body.restrictionFrom,
        jewelExchangeSignupStatus: req.body.jewelExchangeSignupStatus,
        jewelExchangeSignupDate: req.body.jewelExchangeSignupDate,
        jewelExchangePlan: req.body.jewelExchangePlan,
        suppliersActivated: req.body.suppliersActivated,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await productinfo.save();
     productinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, prodinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}