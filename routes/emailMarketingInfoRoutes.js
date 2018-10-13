const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const EmailMarketingAccountInfo = mongoose.model('emailmarketingaccountinfo');

module.exports = app =>{
    //Get Customer Email Marketing Account info data by ID
    app.get('/api/emailmarketingaccountinfo/:emktaccountinfoid', async(req, res) =>{
        const emktaccinfoid= req.params.emktaccountinfoid;
        const eMktAccountInfo = await EmailMarketingAccountInfo.find({_id: emktaccinfoid});
        //console.log(eMktAccountInfo);
        res.send(eMktAccountInfo);
        
    });

    app.post('/api/emailmarketingaccountinfo',  async (req,res) =>{
        // console.log(req.body);
       const eMktAccountInfo = new EMktAccountInfo({
        emailRequirement: req.body.emailRequirement,
        emailProvider: req.body.emailProvider,
        adminEmailId: req.body.adminEmailId,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await eMktAccountInfo.save();
     eMktAccountInfo.findOneAndUpdate({
        _id: req.body.customerId
     }, eMktAccInfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}