const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerCalllogInfo = mongoose.model('callloginfo');

module.exports = app =>{
    //Get Website info data 
    app.get('/api/customercallloginfo/:callloginfoid', async(req, res) =>{
        const custCallLogInfoId= req.params.callloginfoid;
        const callloginfo = await CustomerCalllogInfo.find({
        _id: mongoose.Types.ObjectId(custCallLogInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(callloginfo);
        //res.send(callloginfo);
        if (callloginfo) {
            res.send(callloginfo);
          } else {
            res.send("no data");
          }
        
    });

//New
app.post("/api/customercallloginfo", async (req, res) => {
    
    const callloginfo ={...req.body};
    callloginfo.updateDate = Date.now();
    if (req.body.custCallLogInfoId = 0){
        callloginfo.createDate = Date.now();
    }

    //console.log(callloginfo);
    CustomerCalllogInfo.findOneAndUpdate(
      {
        _id: req.body.custCallLogInfoId
      },
      callloginfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        console.log(err);
       // console.log(res);
      }
    );

    res.end();
});
    
}