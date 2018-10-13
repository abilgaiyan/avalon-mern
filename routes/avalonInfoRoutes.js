const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonInfo = mongoose.model('avaloninfo');

module.exports = app =>{
    //Get Avalon website info data 
    app.get('/api/avaloninfo/:avaloninfoid', async(req, res) =>{
        const avalonInfoId= req.params.avaloninfoid;
        const avaloninfo = await AvalonInfo.find({_id: avalonInfoId})
                                               .populate('_websitestatus');
        //console.log(avaloninfo);
        res.send(avaloninfo);
        
    });

    app.post('/api/avaloninfo',  async (req,res) =>{
        // console.log(req.body);
       const avaloninfo = new AvalonInfo({
        signupDate: req.body.signupDate,
        numberOfDaysFromSignup: req.body.numberOfDaysFromSignup,
        layoutSentDate: req.body.layoutSentDate,
        layoutAprrovedDate: req.body.layoutAprrovedDate,
        betaOnReviewDate: req.body.betaOnReviewDate,
        comments: req.body.comments,
        _websitestatus: req.body._websitestatus,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });
  
     //await avaloninfo.save();
     avaloninfo.findOneAndUpdate({
        _id: req.body.customerId
     }, avalinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}