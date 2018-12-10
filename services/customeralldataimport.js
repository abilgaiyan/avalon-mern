
var http = require('http');
var XLSX = require('xlsx');
const mongoose = require('mongoose');
// var mkdirp = require('mkdirp');
// var fs = require('fs');
// var getDirName = require('path').dirname;

// mongoose.connect("mongodb://avalon:avalon123@ds113693.mlab.com:13693/avalonsupport-dev");
// var dbo = mongoose.connection;

// dbo.on("error", console.error.bind(console, "connection error"));
// dbo.once("open", function (callback) {
//     console.log("Connection succeeded.");
// });

var workbook = XLSX.readFile('AshiB2BSalesManInfo.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
//console.log(xlData);

console.log(workbook.Sheets)

// dbo.createCollection("salesperson", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     //    db.close();
// });
// // //var myobj = { JEWELSOFT_ID: xlData[0]["JEWELSOFT ID"], CUSTOMER_NAME: xlData[0]["CUSTOMER NAME"],MAIN_CONTACT: xlData[0]["MAIN CONTACT"], ADDRESS_1: xlData[0]["ADDRESS 1"],CTIY: xlData[0]["CTIY"], STATE: xlData[0]["STATE"],TELEPHONE: xlData[0]["TELEPHONE"], SALES_PERSON: xlData[0]["SALES PERSON"],WEBSITE_URL: xlData[0]["WEBSITE URL"], MONTH: xlData[0]["MONTH"],YEAR: xlData[0]["YEAR"], STATUS: xlData[0]["STATUS"],LIQUID_DESIGN: xlData[0]["LIQUID DESIGN"], MONTHLY_PLAN: xlData[0]["MONTHLY PLAN"], HOSTING_AMOUNT_PAYING: xlData[0]["HOSTING_AMOUNT_PAYING"]  , RESPONSIVE_UPGRADE: xlData[0]["RESPONSIVE UPGRADE"] };

// dbo.collection("salesperson").insert(xlData, function (err, res) {
//     if (err) throw err;
//     console.log("document insertion completed");
//     //    db.close();
// });


// //console.log(websiteurlname)
// await db.collection("customerinfo").find({ websiteUrl: websiteurlname }).toArray(function (err, result) {
//     if (err) throw err;
//     //console.log(result.length);
//     // console.log(result[0]._id);
//     if (result.length > 0) {
//         customerid = result[0]._id;
//     } else {
//         customerid = 'orphen';
//     }

//     console.log(customerid);
//     console.log(mail.html)

//     var EmailDataToDB = new EmailUtility({
//         subject: mail.headers.subject,
//         text: mail.text,
//         html: mail.html,
//         from: mail.headers.from,
//         to: mail.headers.to,
//         type: type,
//         hasattachment: "N.A",
//         emaildate: mail.date,
//         synced: true,
//         status: "Active",
//         createDate: Date.now(),
//         updateDate: Date.now(),
//         customerid: customerid
//     });

//     EmailDataToDB.save(function (error) {
//         console.log("Your Mail Data has been saved!");
//         if (error) {
//             console.error(error);
//         }
//     });


// app.post("/api/websiteinfo", async (req, res) => {

//     const websiteinfo = { ...req.body };
//     websiteinfo.updateDate = Date.now();
//     const customerId = websiteinfo.customerId;
//     const websiteinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _websiteInfo: 1, _id: 0 });
//     const websiteinfoId = websiteinfo_temp[0]._websiteInfo;

//     if (websiteinfoId === null) {
//       //websiteinfo._id = new ObjectID();
//       websiteinfo.createDate = Date.now();
//       // console.log("NULL>>>>>>>>>>>>>>", websiteinfo);
//       await WebsiteInfo.create(websiteinfo, async (err, newid) => {
//         // Deal with the response data/error
//         if (err) {
//           console.log(err);
//         }
//         if (newid) {
//           //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
//           //Push websiteinfoId from WebsiteInfo collection to CustomerInfo Table
//           await CustomerInfo.findOneAndUpdate(
//             { _id: customerId },
//             { _websiteInfo: newid._id }
//           )
//         }
//         // console.log(res);
//       });
//       res.send(websiteinfo);
//     }
//     else {
//       await WebsiteInfo.findOneAndUpdate(
//         {
//           _id: websiteinfoId
//         },
//         websiteinfo,
//         { upsert: false },
//         (err, res) => {
//           // Deal with the response data/error
//           if (err) {
//             console.log(err);
//           }
//           if (res) {
//             //console.log(res);
//           }
//           // console.log(res);
//         });
//       res.send(websiteinfo);
//     }
//     res.end();
//   });




























// app.post('/api/addcustomerinfo', async (req, res) => {
//     const { jewelsoftId, Name, address1, city, state, telephone, websiteUrl, avalonId, customerDBA, mainContact, position, address2, postalCode, contactpersonEmail, telephone1, telephone2, websiteProvider, customersince, customerType, comment } = req.body;
//     const AddCustomerInfoData = new CustomerInfo({
//         jewelsoftId,
//         Name,
//         address1,
//         city,
//         state,
//         telephone,
//         websiteUrl,
//         avalonId,
//         customerDBA,
//         mainContact,
//         position,
//         address2,
//         postalCode,
//         contactpersonEmail,
//         telephone1,
//         telephone2,
//         websiteProvider,
//         customersince,
//         customerType,
//         comment,
//         _salesPerson: null,
//         _buyinggroups: [],
//         _avalonInfo: null,
//         _billingInfo: null,
//         _websiteInfo: null,
//         _productInfo: null,
//         _ashimicrowebsiteInfo: null,
//         _domainInfo: null,
//         _sslInfo: null,
//         _businessEmailInfo: null,
//         _emailmarketingAccountInfo: null,
//         _querysupportInfo: null,
//         _targetAreaInfo: null,
//         _callLogInfo: [],
//         createDate: Date.now(),
//         updateDate: Date.now()
//     });

//     //Save Data
//     if (AddCustomerInfoData) {
//         await AddCustomerInfoData.save((err, NewCustomer) => {
//             if (err) {
//                 res.send('Error in saving', err);
//             }
//             if (NewCustomer) {
//                 //New Customer Inserted
//                 console.log(NewCustomer)
//             }

//         });