const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonBillingInfo = mongoose.model('billinginfo');

module.exports = app =>{
    //Get Avalon website Billing Info data 
    app.get('/api/avalonbillinginfo/:avalonbillinginfoid', async(req, res) =>{
        const avalonbillinfoId= req.params.avalonbillinginfoid;
        const billinginfo = await AvalonBillingInfo.find({_id: avalonbillinfoId})
                                                   .populate('_productPlan');
        //console.log(billinginfo);
        res.send(billinginfo);
        
    });

    app.post('/api/avalonbillinginfo',  async (req,res) =>{
        // console.log(req.body);
       const billinginfo = new BillingInfo({
        websiteSetupAmount:  req.body.websiteSetupAmount,
        buyingGroupDiscount:  req.body.buyingGroupDiscount,
        setupAmountReceived:  req.body.setupAmountReceived,
        setupAmountPending:  req.body.setupAmountPending,
        hostingPaymentType:  req.body.hostingPaymentType,
        hostingAmount:  req.body.hostingAmount,
        _productPlan: req.body._productPlan,
        comments:  req.body.comments,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });
  
     //await billinginfo.save();
     billinginfo.findOneAndUpdate({
        _id: req.body.customerId
     }, avalonbillinginfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}