const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const ProductInfo = mongoose.model('productinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app =>{
    //Get Avalon Product info data 
    app.get('/api/productinfo/:productinfoid', async(req, res) =>{
        const prodInfoId= req.params.productinfoid;
        const productinfo = await ProductInfo.find({
        _id: mongoose.Types.ObjectId(prodInfoId)
      },{createDate: 0, updateDate: 0 });
        //console.log(productinfo);
        //res.send(productinfo);
        if (productinfo) {
            res.send(productinfo);
          } else {
            res.send("no data");
          }
        
    });

//New
app.post("/api/productinfo", async (req, res) => {
    
            const productinfo ={...req.body};
            productinfo.updateDate = Date.now();
            if (req.body.prodInfoId = 0){
                productinfo.createDate = Date.now();
            }
            const customerId = req.body.customerId;
        
            //console.log(productinfo);
            ProductInfo.findOneAndUpdate(
              {
                _id: req.body.prodInfoId
              },
              productinfo,
              { upsert: true },
              (err, res) => {
                // Deal with the response data/error
                console.log(err);
               // console.log(res);

               if (res) {

                CustomerInfo.update({ _id: customerId }, {
                  _productInfo: res._id
                }, function (err, affected, resp) {
                  console.log(resp);
                })
              }

              }
            );
        
            res.end();
    });

}