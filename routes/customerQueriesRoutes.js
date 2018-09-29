const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');

const CustomerQueries = mongoose.model('customerqueries');


module.exports = app => {


    //Get Customer Queries Communication
    app.get('/api/customerqueries/:customerId', async (req, res) => {
        var customerid = req.params.customerId
        const customerqueries = await CustomerQueries.find({ _customer: customerid });
        res.send(customerqueries);
    });

    //Post Request to Customer Queries Communication
    app.post('/api/customerqueries', async (req, res) => {

        const { subject, message, customerId } = req.body;
        const CustomerQueriesData = new CustomerQueries({
            subject,
            message,
            _customer: customerId,
            displayorder: 0,
            status: 'Active',
            createDate: Date.now(),
            updateDate: Date.now()

        });
        //Save Data
        await CustomerQueriesData.save();
        res.end();
    });
}