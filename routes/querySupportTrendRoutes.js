const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const QuerySupportTrendInfo = mongoose.model('querysupporttrendinfo');

module.exports = app =>{
    //Get Customer Query information data by ID
    app.get('/api/querysupporttrendinfo/:querySupportinfoid', async(req, res) =>{
        const querySupportTrendinfoid= req.params.querySupportTrendinfoid;
        const querySupportInfo = await QuerySupportTrendInfo.find({_id: querySupportTrendinfoid});
        //console.log(querySupportInfo);
        res.send(querySupportInfo);
        
    });

    app.post('/api/querysupporttrendinfo',  async (req,res) =>{
        // console.log(req.body);
       const querySupportInfo = new QuerySupportInfo({
        avgMonthlyQuery: req.body.avgMonthlyQuery,
        avgYearlyQuery: req.body.avgYearlyQuery,
        createDate: Date.now(),
        updateDate: Date.now()
 
       });

     //await querySupportInfo.save();
     querySupportInfo.findOneAndUpdate({
        _id: req.body.customerId
     }, querySuppTrendInfo, { upsert: true }, (err, res) => {
        // Deal with the response data/error
     });

     res.end();
     
     });

    
}