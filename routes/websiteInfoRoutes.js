const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const WebsiteInfo = mongoose.model('websiteinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app =>{
    //Get Website info data 
    app.get('/api/websiteinfo/:websiteinfoid', async(req, res) =>{
        const webInfoId= req.params.websiteinfoid;
        const websiteinfo = await WebsiteInfo.find({
        _id: mongoose.Types.ObjectId(webInfoId)
        },{createDate: 0, updateDate: 0 }).populate('_productplan');
        //console.log(websiteinfo);
        //res.send(websiteinfo);
        if (websiteinfo) {
            res.send(websiteinfo);
          } else {
            res.send("no data");
          }
        
    });

    //New
    app.post("/api/websiteinfo", async (req, res) => {
    
            const websiteinfo ={...req.body};
            websiteinfo.updateDate = Date.now();
            if (req.body.webInfoId = 0){
                websiteinfo.createDate = Date.now();
            }

            const customerId = req.body.customerId;
        
            //console.log(websiteinfo);
            WebsiteInfo.findOneAndUpdate(
              {
                _id: req.body.webInfoId
              },
              websiteinfo,
              { upsert: true },
              (err, res) => {
                // Deal with the response data/error
                console.log(err);
               // console.log(res);

               if (res) {

                CustomerInfo.update({ _id: customerId }, {
                  _websiteInfo: res._id
                }, function (err, affected, resp) {
                  console.log(resp);
                })
              }
              
            }
              
            );
        
            res.end();
            });

}