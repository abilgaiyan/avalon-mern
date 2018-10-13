const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const SSLInfo = mongoose.model('sslinfo');

module.exports = app =>{
    //Get Customer Website SSL Information data by ID
    app.get('/api/sslinfo/:sslinfoid', async(req, res) =>{
        const sslInfoId= req.params.sslinfoid;
        const sslinfo = await SSLInfo.find({_id: sslInfoId});
        //console.log(sslinfo);
        res.send(sslinfo);
        
    });

    app.post('/api/sslinfo',  async (req,res) =>{
        // console.log(req.body);
       const sslinfo = new SslInfo({
        sslPurchaser: req.body.sslPurchaser,
        sslProvider: req.body.sslProvider,
        sslType: req.body.sslType,
        httpsStatus: req.body.httpsStatus,
        sslAccountId: req.body.sslAccountId,
        sslLoginUserName: req.body.sslLoginUserName,
        sslLoginUserPassword: req.body.sslLoginUserPassword,
        buyDate: req.body.buyDate,
        expiryDate: req.body.expiryDate,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await websiteinfo.save();
     sslinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, sslwebinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}