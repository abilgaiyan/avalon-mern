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
const EmailUtility = mongoose.model("customeremails");


var imap = {
    user: "vishaltiwari@avalonsolution.com",
    password: "varsha0882@",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,// use secure connection
    tlsOptions: { rejectUnauthorized: false }
};


notifier(imap).on('mail', function (mail) {
    console.log(mail);

    // console.log(mail.headers.subject);
    // console.log(mail.headers.from);
    // console.log(mail.headers.to);
    // console.log(mail.text);
    // console.log(mail.date);

    //Get Data from mail
    var EmailDataToDB = new EmailUtility({
        subject: mail.headers.subject,
        text: mail.text,
        from: mail.headers.from,
        to: mail.headers.to,
        type: "N.A",
        hasattachment: "N.A",
        emaildate: mail.date,
        synced: true,
        status: "Active",
        createDate: Date.now(),
        updateDate: Date.now(),
        customerid: ""
    });

    //Save Mail Data to Database
    EmailDataToDB.save(function (error) {
        console.log("Your Mail Data has been saved!");
        if (error) {
            console.error(error);
        }
    });
}).start();