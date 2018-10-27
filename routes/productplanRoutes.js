const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const ProductPlanInfo = mongoose.model('productplan');

module.exports = app =>{
    //Get Add Product Plan Data
    app.get('/api/ProductPlanAllData', async(req, res) =>{
        const prodplanaaldata = await ProductPlanInfo.find({});
        //console.log(prodplanaaldata);
        res.send(prodplanaaldata);

        if (prodplanaaldata) {
            res.send(prodplanaaldata);
          } else {
            res.send("no data");
          }
        
    });

     //Get Website Product Plan Master info data 
     app.get('/api/ProductPlanInfo/:productplaninfoid', async(req, res) =>{
            const prodplanId= req.params.productplaninfoid;
            const prodplaninfo = await ProductPlanInfo.find({
            _id: mongoose.Types.ObjectId(prodplanId)
            },{createDate: 0, updateDate: 0 });
            //console.log(prodplaninfo);
            //res.send(prodplaninfo);
            if (prodplaninfo) {
                res.send(prodplaninfo);
              } else {
                res.send("no data");
              }
            
        });

    //New
    app.post("/api/ProductPlanInfo", async (req, res) => {
    
            const prodplaninfo ={...req.body};
            prodplaninfo.updateDate = Date.now();
            if (req.body.prodplanId = 0){
                prodplaninfo.createDate = Date.now();
            }

            const customerId = req.body.customerId;
        
            //console.log(websiteinfo);
            ProductPlanInfo.findOneAndUpdate(
              {
                _id: req.body.prodplanId
              },
              prodplaninfo,
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