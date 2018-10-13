const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const WebsiteInfo = mongoose.model('websiteinfo');

module.exports = app =>{
    //Get Website info data 
    app.get('/api/websiteinfo/:websiteinfoid', async(req, res) =>{
        const webInfoId= req.params.websiteinfoid;
        const websiteinfo = await WebsiteInfo.find({_id: webInfoId})
                                                  .populate('_productplan');
        //console.log(websiteinfo);
        res.send(websiteinfo);
        
    });

    app.post('/api/websiteinfo',  async (req,res) =>{
        // console.log(req.body);
       const websiteinfo = new WebsiteInfo({
        liveDate: req.body.liveDate,
        holdDate: req.body.holdDate,
        reasontoLeave: req.body.reasontoLeave,
        designeType: req.body.designeType,
        responsiveWebsiteReleasedDate: req.body.responsiveWebsiteReleasedDate,
        shoppingcartStatus: req.body.shoppingcartStatus,
        comments: req.body.comments,
        _productplan: req.body._productplan,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await websiteinfo.save();
     websiteinfo.findOneAndUpdate({
        _id: req.body.customerId
     }, webinfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}