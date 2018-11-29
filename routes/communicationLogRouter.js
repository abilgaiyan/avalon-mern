const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const PreviousCallType = mongoose.model('previouscalltype');
const CustomerCalllogInfo = mongoose.model('callloginfo');
const CustomerInfo = mongoose.model("customerinfo");
const CustomerEmail = mongoose.model("customeremails");
const CustomerComment = mongoose.model("customerqueries");

module.exports = app => {


    //Get Website info data 
    app.get('/api/comunnicationLog/:customerId', async (req, res) => {
        let communicationLogData = [];
        const customerId = req.params.customerId;
        const custCallLogInfoIds_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _callLogInfo: 1, _id: 0 });
        const custCallLogInfoIds = custCallLogInfoIds_temp[0]._callLogInfo;

        // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
        // console.log(custCallLogInfoIds);

        let callloginfo = await CustomerCalllogInfo.find({
            //_id: mongoose.Types.ObjectId(custCallLogInfoId)
            _id: { $in: custCallLogInfoIds }
        }, { createDate: 0, updateDate: 0 }).populate('_previousCallType');
        //console.log('callloginfo', callloginfo);
        //res.send(callloginfo);
        if (callloginfo) {
            // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
            // console.log(callloginfo);
            //communicationLogData.push(callloginfo);//.forEach(element => { element.Type = "call"; }))
            callloginfo = await callloginfo.map(element => {
                return { ...element._doc, ctype: "call" }
            })
            //res.send(callloginfo);
        }

        const custCommentInfoIds_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _querysupportInfo: 1, _id: 0 });
        const custCommentLogInfoIds = custCommentInfoIds_temp[0]._querysupportInfo;

        let commentinfo = await CustomerComment.find({
            //_id: mongoose.Types.ObjectId(custCallLogInfoId)
            _id: { $in: custCommentLogInfoIds }
        }, { createDate: 0, updateDate: 0 });
        //console.log('commentinfo', commentinfo);
        //res.send(commentinfo);
        if (commentinfo) {
            // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
            // console.log(commentinfo);
            //communicationLogData.push(commentinfo);//.forEach(element => { element.Type = "call"; }))
            commentinfo = await commentinfo.map(element => {
                return { ...element._doc, ctype: "comment" }
            })
            //res.send(commentinfo);
        }


        let customeremail = await CustomerEmail.find({
            customerid: customerId
        }).sort({ createDate: -1 });

        //console.log('customeremail', customeremail);

        if (customeremail)
            //      communicationLogData.push(customeremail);//.forEach(element => { element.Type = "email"; }));
            customeremail = await customeremail.map(element => {
                return { ...element._doc, ctype: "email" }
            })


        //console.log('communicationLogData', communicationLogData)

        if (customeremail || callloginfo) {
            communicationLogData = [...customeremail, ...callloginfo, ...commentinfo];
            res.send(communicationLogData);
        }
        else
            res.send("no data");
    });
}