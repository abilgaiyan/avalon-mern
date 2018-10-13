const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AshiMicrowebsiteInfo = mongoose.model('ashimicrowebsiteinfo');

module.exports = app =>{
    //Get Website info data 
    app.get('/api/ashimicrowebsiteinfo/:microwebsiteinfoid', async(req, res) =>{
        const microWebInfoId= req.params.microwebsiteinfoid;
        const microwebinfo = await AshiMicrowebsiteInfo.find({_id: microWebInfoId});
        //console.log(microwebinfo);
        res.send(microwebinfo);
        
    });

    app.post('/api/ashimicrowebsiteinfo',  async (req,res) =>{
        // console.log(req.body);
       const microWebsiteinfo = new MicroWebsiteinfo({
        idoWebsiteUrl: req.body.idoWebsiteUrl,
        lovebrightWebsiteUrl: req.body.lovebrightWebsiteUrl,
        silverstonesWebsiteUrl: req.body.silverstonesWebsiteUrl,
        shopholidayWebsiteUrl: req.body.shopholidayWebsiteUrl,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await websiteinfo.save();
     microWebsiteinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, microWebinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}