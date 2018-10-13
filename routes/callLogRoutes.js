const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerCalllogInfo = mongoose.model('callloginfo');

module.exports = app =>{
    //Get Website info data 
    app.get('/api/customercallloginfo/:callloginfoid', async(req, res) =>{
        const custCallLogInfoId= req.params.callloginfoid;
        const callloginfo = await CustomerCalllogInfo.find({_id: custCallLogInfoId});
        //console.log(callloginfo);
        res.send(callloginfo);
        
    });

    app.post('/api/customercallloginfo',  async (req,res) =>{
        // console.log(req.body);
       const callloginfo = new CallLogInfo({
        previousCallDate: req.body.previousCallDate,
        previousCallType: req.body.previousCallType,
        callPerson: req.body.callPerson,
        avalonExcutive: req.body.avalonExcutive,
        topic: req.body.topic,
        summary: req.body.summary,
        comments: req.body.comments,
        followupcalldate: req.body.followupcalldate,
        followupcallTime: req.body.followupcallTime,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await callloginfo.save();
     callloginfo.findOneAndUpdate({
        _id: req.body.customerId
     }, callloginfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}