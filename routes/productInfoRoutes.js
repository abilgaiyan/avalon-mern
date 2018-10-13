const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const ProductInfo = mongoose.model('productinfo');

module.exports = app =>{
    //Get Avalon Product info data 
    app.get('/api/productinfo/:productinfoid', async(req, res) =>{
        const prodInfoId= req.params.productinfoid;
        const productinfo = await ProductInfo.find({_id: prodInfoId});
        //console.log(productinfo);
        res.send(productinfo);
        
    });

    app.post('/api/productinfo',  async (req,res) =>{
        // console.log(req.body);
       const productinfo = new ProductInfo({
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