const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerInfo = mongoose.model('customerinfo');

module.exports = app =>{
    //Get Customer info data 
    app.get('/api/customerinfo/:customerid', async(req, res) =>{
        const customerId= req.params.customerid.toString();
        console.log(customerId);
        const customerinfo = await CustomerInfo.find({_id: customerId})
                                               .populate('_salesPerson')
                                               .populate('_buyinggroups')
                                               .populate('_avalonInfo')
                                               .populate('_billingInfo')
                                               .populate('_websiteInfo')
                                               .populate('_productInfo')
                                               .populate('_ashimicrowebsiteInfo')
                                               .populate('_domainInfo')
                                               .populate('_sslInfo')
                                               .populate('_businessEmailInfo')
                                               .populate('_emailmarketingAccountInfo')
                                               .populate('_querysupportInfo')
                                               .populate('_targetAreaInfo')
                                               .populate('_callLogInfo');
        //console.log(customerinfo);
        if (customerinfo){
        res.send(customerinfo);
        }
        else{
            res.send('no data');
        }
        
    });

    app.post('/api/customerinfo',  async (req,res) =>{
        // console.log(req.body);
       //const {name, email, mobile, message} = req.body;
       const customerinfo = new CustomerInfo({
        jewelsoftId: req.body.jewelsoftId,
        avalonId: req.body.avalonId,
        customerName: req.body.customerName,
        customerDBA: req.body.customerDBA,
        mainContact: req.body.mainContact,
        contactPersonName: req.body.contactPersonName,
        position: req.body.position,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        contactpersonEmail: req.body.contactpersonEmail,
        mobileNumber: req.body.mobileNumber,
        telephone1: req.body.telephone1,
        telephone2: req.body.telephone2,
        _salesPerson: req.body._salesPersonId,
        websiteUrl: req.body.websiteUrl,
        websiteProvider: req.body.websiteProvider,
        customersince: req.body.customersince,
        customerType: req.body.customerType,
        _buyinggroups: req.body._buyinggroupId,
        comment: req.body.comment,
        _avalonInfo: req.body._avalonInfo,
        _billingInfo: req.body._billingInfo,
        _websiteInfo: req.body._websiteInfo,
        _productInfo: req.body._productInfo,
        _ashimicrowebsiteInfo: req.body._ashimicrowebsiteInfo,
        _domainInfo: req.body._domainInfo,
        _sslInfo: req.body._sslInfo,
        _businessEmailInfo: req.body._businessEmailInfo,
        _emailmarketingAccountInfo: req.body._emailmarketingAccountInfo,
        _querysupportInfo: req.body._querysupportInfo,
        _targetAreaInfo: req.body._targetAreaInfo,
        _callLogInfo: req.body._callLogInfo,
        displayorder: 0,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await customerinfo.save();
     customerinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, custinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

     



    
}