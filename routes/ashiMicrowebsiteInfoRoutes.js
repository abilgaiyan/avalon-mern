const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AshiMicrowebsiteInfo = mongoose.model('ashimicrowebsiteinfo');

module.exports = app =>{
    //Get Website info data 
    app.get('/api/ashimicrowebsiteinfo/:microwebsiteinfoid', async(req, res) =>{
        const microWebInfoId= req.params.microwebsiteinfoid;
        const microwebinfo = await AshiMicrowebsiteInfo.find({
        _id: mongoose.Types.ObjectId(microWebInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(microwebinfo);
        //res.send(microwebinfo);
        if (microwebinfo) {
            res.send(microwebinfo);
          } else {
            res.send("no data");
          }
        
    });

    //New
    app.post("/api/ashimicrowebsiteinfo", async (req, res) => {
    
        const microWebsiteinfo ={...req.body};
        microWebsiteinfo.updateDate = Date.now();
        if (req.body.microWebInfoId = 0){
            microWebsiteinfo.createDate = Date.now();
        }
    
        //console.log(microWebsiteinfo);
        AshiMicrowebsiteInfo.findOneAndUpdate(
          {
            _id: req.body.microWebInfoId
          },
          microWebsiteinfo,
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