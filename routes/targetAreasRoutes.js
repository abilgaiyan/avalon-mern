const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerTargetAreaInfo = mongoose.model('targetareainfo');

module.exports = app =>{
    //Get Website Target Area Information data by ID
    app.get('/api/targetareainfo/:targetareainfoid', async(req, res) =>{
        const tarareaInfoId= req.params.targetareainfoid;
        const targetAreaInfo = await CustomerTargetAreaInfo.find({
        _id: mongoose.Types.ObjectId(tarareaInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(targetAreaInfo);
        //res.send(targetAreaInfo);
        if (targetAreaInfo) {
            res.send(targetAreaInfo);
          } else {
            res.send("no data");
          }
        
    });

//New
app.post("/api/targetareainfo", async (req, res) => {
    
    const targetAreaInfoId ={...req.body};
    targetAreaInfoId.updateDate = Date.now();
    if (req.body.tarareaInfoId = 0){
        targetAreaInfoId.createDate = Date.now();
    }

    //console.log(targetAreaInfoId);
    CustomerTargetAreaInfo.findOneAndUpdate(
      {
        _id: req.body.tarareaInfoId
      },
      targetAreaInfoId,
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