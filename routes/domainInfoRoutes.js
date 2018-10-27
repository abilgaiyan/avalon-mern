const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustDomainInfo = mongoose.model('domaininfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app =>{
    //Get Customer Domain Information Data by ID
    app.get('/api/customerdomaininfo/:domaininfoid', async(req, res) =>{
        const custDomianInfoId= req.params.domaininfoid;
        const domaininfo = await CustDomainInfo.find({
        _id: mongoose.Types.ObjectId(custDomianInfoId)
        },{createDate: 0, updateDate: 0 });
        //console.log(domaininfo);
        //res.send(domaininfo);
        if (domaininfo) {
            res.send(domaininfo);
          } else {
            res.send("no data");
          }
        
    });

    //New
    app.post("/api/customerdomaininfo", async (req, res) => {
    
        const domaininfo ={...req.body};
        domaininfo.updateDate = Date.now();
        if (req.body.custDomianInfoId = 0){
            domaininfo.createDate = Date.now();
        }
        const customerId = req.body.customerId;
    
        //console.log(domaininfo);
        CustDomainInfo.findOneAndUpdate(
          {
            _id: req.body.custDomianInfoId
          },
          domaininfo,
          { upsert: true },
          (err, res) => {
            // Deal with the response data/error
            console.log(err);
           // console.log(res);
           if (res) {

            CustomerInfo.update({ _id: customerId }, {
              _domainInfo: res._id
            }, function (err, affected, resp) {
              console.log(resp);
            })
          }
          }
        );
    
        res.end();
      });
    
}