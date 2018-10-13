const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustomerTargetAreaInfo = mongoose.model('targetareainfo');

module.exports = app =>{
    //Get Website Target Area Information data by ID
    app.get('/api/targetareainfo/:targetareainfoid', async(req, res) =>{
        const tarareaInfoId= req.params.targetareainfoid;
        const targetAreaInfoId = await CustomerTargetAreaInfo.find({_id: tarareaInfoId});
        //console.log(targetAreaInfoId);
        res.send(targetAreaInfoId);
        
    });

    app.post('/api/targetareainfo',  async (req,res) =>{
        // console.log(req.body);
       const targetAreaInfoId = new TargetAreaInfoId({
        targetArea: req.body.targetArea,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await targetAreaInfoId.save();
     targetAreaInfoId.findOneAndUpdate({
        _id: req.body.customerId
     }, targAreaInfoId, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}