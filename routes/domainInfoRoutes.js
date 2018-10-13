const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustDomainInfo = mongoose.model('domaininfo');

module.exports = app =>{
    //Get Customer Domain Information Data by ID
    app.get('/api/customerdomaininfo/:domaininfoid', async(req, res) =>{
        const custDomianInfoId= req.params.domaininfoid;
        const domaininfo = await CustDomainInfo.find({_id: custDomianInfoId});
        //console.log(domaininfo);
        res.send(domaininfo);
        
    });

    app.post('/api/customerdomaininfo',  async (req,res) =>{
        // console.log(req.body);
       const domaininfo = new DomainInfo({
        domainPurchaser: req.body.domainPurchaser,
        domainProvider: req.body.domainProvider,
        domainAccountId: req.body.domainAccountId,
        domainLoginUserName: req.body.domainLoginUserName,
        domainLoginUserPassword: req.body.domainLoginUserPassword,
        buyDate: req.body.buyDate,
        expiryDate: req.body.expiryDate,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await domaininfo.save();
     domaininfo.findOneAndUpdate({
        _id: req.body.customerId
     }, custdomaininfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}