const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const BusinessEmailInfo = mongoose.model('businessemailinfo');

module.exports = app =>{
    //Get Customer Website Email info By ID
    app.get('/api/businessemailinfo/:bemailinfoid', async(req, res) =>{
        const emailInfoId= req.params.bemailinfoid;
        const bemailinfo = await BusinessEmailInfo.find({_id: emailInfoId});
        //console.log(bemailinfo);
        res.send(bemailinfo);
        
    });

    app.post('/api/businessemailinfo',  async (req,res) =>{
        // console.log(req.body);
       const bemailinfo = new BemailInfo({
        emailRequirement: req.body.emailRequirement,
        emailProvider: req.body.emailProvider,
        adminEmailId: req.body.v,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await bemailinfo.save();
     bemailinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, bEmailinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}