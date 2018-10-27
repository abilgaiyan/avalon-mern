const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const SSLInfo = mongoose.model('sslinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app =>{
    //Get Customer Website SSL Information data by ID
    app.get('/api/sslinfo/:sslinfoid', async(req, res) =>{
        const sslInfoId= req.params.sslinfoid;
        const sslinfo = await SSLInfo.find({
        _id: mongoose.Types.ObjectId(sslInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(sslinfo);
        //res.send(sslinfo);
        if (sslinfo) {
            res.send(sslinfo);
          } else {
            res.send("no data");
          }
        
    });


//New
 app.post("/api/sslinfo", async (req, res) => {
    
            const sslinfo ={...req.body};
            sslinfo.updateDate = Date.now();
            if (req.body.sslInfoId = 0){
                sslinfo.createDate = Date.now();
            }
            const customerId = req.body.customerId;
        
            //console.log(sslinfo);
            SSLInfo.findOneAndUpdate(
              {
                _id: req.body.sslInfoId
              },
              sslinfo,
              { upsert: true },
              (err, res) => {
                // Deal with the response data/error
                console.log(err);
               // console.log(res);
               if (res) {

                CustomerInfo.update({ _id: customerId }, {
                  _sslInfo: res._id
                }, function (err, affected, resp) {
                  console.log(resp);
                })
              }
              }
            );
        
            res.end();
   });

}