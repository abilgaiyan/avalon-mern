const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const HostingAmountInfo = mongoose.model('hostingamount');

module.exports = app => {
    //Get Add Product Plan Data
    app.get('/api/HostingAmountAllData', async (req, res) => {
        const hostingamountalldata = await HostingAmountInfo.find({});
        //console.log(hostingamountalldata);
        //res.send(hostingamountalldata);

        if (hostingamountalldata) {
            res.send(hostingamountalldata);
        } else {
            res.send("no data");
        }

    });

    //Get Website Product Plan Master info data 
    app.get('/api/HostingAmountInfo/:hostingamountid', async (req, res) => {
        const hostingamountId = req.params.hostingamountid;
        const hostingamountinfo = await HostingAmountInfo.find({
            _id: mongoose.Types.ObjectId(hostingamountId)
        }, { createDate: 0, updateDate: 0 });
        //console.log(hostingamountinfo);
        //res.send(hostingamountinfo);
        if (hostingamountinfo) {
            res.send(hostingamountinfo);
        } else {
            res.send("no data");
        }

    });


}