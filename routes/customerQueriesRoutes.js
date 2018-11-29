const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const CustomerQueries = mongoose.model('customerqueries');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {


    //Get Customer Queries Communication
    app.get('/api/customerqueries/:customerId', async (req, res) => {
        var customerid = req.params.customerId
        const customerqueries = await CustomerQueries.find({ _customer: customerid }).sort({ createDate: -1 });;
        res.send(customerqueries);
    });


    //New

    //Post Request to Customer Queries Communication
    app.post('/api/customerqueries', async (req, res) => {
        // console.log('----------------------------->>>>>>>>><<<<<<<<<<<<<<<<-----------------------');
        // console.log('req.body', req.body);
        const { qrysubject, qrytext, qryrelated, customerId } = req.body;
        const CustomerQueriesData = new CustomerQueries({
            qrysubject,
            qrytext,
            qryrelated,
            _customer: customerId,
            displayorder: 0,
            status: 'Active',
            createDate: Date.now(),
            updateDate: Date.now()

        });

        //Save Data
        if (CustomerQueriesData) {
            await CustomerQueriesData.save(async (err, supportquery) => {
                if (err) {
                    res.send('Error in saving', err);
                }
                if (supportquery) {
                    //Push CallLogId from CallLogInfo collection to CustomerInfo Table
                    await CustomerInfo.update(
                        { _id: req.body.customerId },
                        { $push: { _querysupportInfo: mongoose.Types.ObjectId(supportquery._id) } }
                    );
                }

            });
            //console.log("--------------------------------->>>>>>>>>>>>>>>>>>>>callinfo ID->>>>>>>>>>>>>>>>>>>>>>>>", data);
            res.send(CustomerQueriesData);
        }
        else {
            res.send("Error!!");
        }
        res.end();
    });

}