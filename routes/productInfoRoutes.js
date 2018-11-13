const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AshiProductStatus = mongoose.model('ashiproductstatus');
const ProductInfo = mongoose.model('productinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {

  //Get Ashi Product Status Data
  app.get('/api/ashiproductstatus', async (req, res) => {
    const ashiproductstatusdata = await AshiProductStatus.find({});
    //console.log(websitestatusdata);
    //res.send(prodplanaaldata);

    if (ashiproductstatusdata) {
      res.send(ashiproductstatusdata);
    } else {
      res.send("no data");
    }

  });

  //Get Avalon Product info data 
  app.get('/api/productinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const productinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _productInfo: 1, _id: 0 });
    const productinfoId = productinfo_temp[0]._productInfo;
    //const customerId = req.params.customerid.toString();
    //console.log(productinfo);
    //res.send(productinfo);

    const productinfo = await ProductInfo.find({
      _id: mongoose.Types.ObjectId(productinfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (productinfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(productinfo);
    } else {
      res.send("no data");
    }

  });

  //New && Edit
  app.post("/api/productinfo", async (req, res) => {

    const productinfo = { ...req.body };
    productinfo.updateDate = Date.now();
    const customerId = productinfo.customerId;
    const productinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _productInfo: 1, _id: 0 });
    const productinfoId = productinfo_temp[0]._productInfo;

    // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
    // console.log(productinfo);

    if (productinfoId === null) {
      //productinfo._id = new ObjectID();
      productinfo.createDate = Date.now();
      // console.log("NULL>>>>>>>>>>>>>>", productinfo);
      await ProductInfo.create(productinfo, async (err, newid) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (newid) {
          //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
          //Push productinfoId from ProductInfo collection to CustomerInfo Table
          await CustomerInfo.findOneAndUpdate(
            { _id: customerId },
            { _productInfo: newid._id }
          )
        }
        // console.log(res);
      });
      res.send(productinfo);
    }
    else {
      await ProductInfo.findOneAndUpdate(
        {
          _id: productinfoId
        },
        productinfo,
        { upsert: false },
        (err, res) => {
          // Deal with the response data/error
          if (err) {
            console.log(err);
          }
          if (res) {
            //console.log(res);
          }
          // console.log(res);
        });
      res.send(productinfo);
    }
    res.end();
  });
  // app.post("/api/productinfo", async (req, res) => {

  //   const productinfo = { ...req.body };
  //   productinfo.updateDate = Date.now();
  //   const customerId = productinfo.customerId;
  //   const productinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _productInfo: 1, _id: 0 });
  //   const productinfoId = productinfo_temp[0]._productInfo;

  //   // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
  //   // console.log(productinfo);

  //   await ProductInfo.findOneAndUpdate(
  //     {
  //       _id: productinfoId
  //     },
  //     productinfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       if (err) {
  //         console.log(err);
  //       }
  //       if (res) {
  //         //console.log(res);
  //       }
  //       // console.log(res);
  //     }
  //   );

  //   res.end();
  // });
}