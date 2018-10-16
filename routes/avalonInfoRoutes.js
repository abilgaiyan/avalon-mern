const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonInfo = mongoose.model('avaloninfo');

module.exports = app =>{
    //Get Avalon website info data 
    app.get('/api/avaloninfo/:avaloninfoid', async(req, res) =>{
        const avalonInfoId= req.params.avaloninfoid;
        const avaloninfo = await AvalonInfo.find({
        _id: mongoose.Types.ObjectId(avalonInfoId)
        },{createDate: 0, updateDate: 0 }).populate('_websitestatus');
        //console.log(avaloninfo);
        //res.send(avaloninfo);
        if (avaloninfo) {
            res.send(avaloninfo);
          } else {
            res.send("no data");
          }
        
    });

    //New
    app.post("/api/avaloninfo", async (req, res) => {
    
        const avaloninfo ={...req.body};
        avaloninfo.updateDate = Date.now();
        if (req.body.avalonInfoId = 0){
            avaloninfo.createDate = Date.now();
        }
    
        //console.log(avaloninfo);
        AvalonInfo.findOneAndUpdate(
          {
            _id: req.body.avalonInfoId
          },
          avaloninfo,
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