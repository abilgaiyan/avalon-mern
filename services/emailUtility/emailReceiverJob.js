const mongoose = require('mongoose');
const keys = require('../../config/dev');
var notifier = require('./index');

mongoose.connect("mongodb://avalon:avalon123@ds113693.mlab.com:13693/avalonsupport-dev");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection succeeded.");
});

//register Model
require('../../models/CustomerEmail');
require('../../models/CustomerInfo');
const EmailUtility = mongoose.model("customeremails");
const CustomerInfo = mongoose.model("customerinfo");


// var imap = {
//     user: "vishaltiwari@avalonsolution.com",
//     password: "varsha0882@",
//     host: "imap.gmail.com",
//     port: 993, // imap port
//     tls: true,// use secure connection
//     tlsOptions: { rejectUnauthorized: false }
// };

var imap = {
    user: keys.user,
    password: keys.password,
    host: keys.host,
    port: keys.port,
    tls: keys.tls,
    tlsOptions: keys.tlsOptions
};


notifier(imap).on('mail', async function (mail) {
    var websiteurl = mail.headers.subject.split('[');
    var type = websiteurl[1].substring(0, websiteurl[1].indexOf(']'));
    var websiteurlname = websiteurl[2].substring(0, websiteurl[2].indexOf(']'));
    var customerid = '';
    console.log("------------------------------>>>>>>>>>>>>>>>>>START<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-----------------------------------");

    //console.log(websiteurlname)
    await db.collection("customerinfo").find({ websiteUrl: websiteurlname }).toArray(function (err, result) {
        if (err) throw err;
        //console.log(result.length);
        // console.log(result[0]._id);
        if (result.length > 0) {
            customerid = result[0]._id;
        } else {
            customerid = 'orphen';
        }

        console.log(customerid);
        console.log(mail.html)

        var EmailDataToDB = new EmailUtility({
            subject: mail.headers.subject,
            text: mail.text,
            html: mail.html,
            from: mail.headers.from,
            to: mail.headers.to,
            type: type,
            hasattachment: "N.A",
            emaildate: mail.date,
            synced: true,
            status: "Active",
            createDate: Date.now(),
            updateDate: Date.now(),
            customerid: customerid
        });

        EmailDataToDB.save(function (error) {
            console.log("Your Mail Data has been saved!");
            if (error) {
                console.error(error);
            }
        });

    });

    console.log("------------------------------>>>>>>>>>>>>>>>>>END<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-----------------------------------");


}).start();