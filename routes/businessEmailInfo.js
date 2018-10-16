const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const BusinessEmailInfo = mongoose.model('businessemailinfo');

module.exports = app =>{
    //Get Customer Website Email info By ID
    app.get('/api/businessemailinfo/:bemailinfoid', async(req, res) =>{
        const emailInfoId= req.params.bemailinfoid;
        const bemailinfo = await BusinessEmailInfo.find({
        _id: mongoose.Types.ObjectId(emailInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(bemailinfo);
        //res.send(bemailinfo);
        if (bemailinfo) {
            res.send(bemailinfo);
          } else {
            res.send("no data");
          }
        
    });

//New
app.post("/api/businessemailinfo", async (req, res) => {
    
    const bemailinfo ={...req.body};
    bemailinfo.updateDate = Date.now();
    if (req.body.emailInfoId = 0){
        bemailinfo.createDate = Date.now();
    }

    //console.log(bemailinfo);
    BusinessEmailInfo.findOneAndUpdate(
      {
        _id: req.body.emailInfoId
      },
      bemailinfo,
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