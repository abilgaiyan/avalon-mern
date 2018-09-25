const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Contactus = mongoose.model('contactus');
const contactusTemplate = require('../services/emailTemplate/contactusTemplate');
//const video_streamer = require('./video_streamer');
module.exports = app =>{

    app.get('/api/contactus', async (req, res) =>{
       const contactus = await Contactus.find({_user: req.user.id});
         
       res.send(contactus);  
    });

    
    // app.get('/api/videourl/:videourl', async (req, res) =>{
    //                 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //                 // res.send(fullUrl);  
    // });
    
    
    
    // app.get('/api/videourl/:videourl',  video_streamer.streamMovie); 

    app.post('/api/contactus',  async (req,res) =>{
       // console.log(req.body);
      const {name, email, mobile, message} = req.body;
      const contactus = new Contactus({
          name,
          email,
          mobile,
          message,
          createDate: Date.now(),
          updateDate: Date.now()

      });
    // Place to send mailer

   // const mailer = new Mailer(contactus, contactusTemplate(survey) );
   // await mailer.send();
    await contactus.save();
    //req.user.credits -=1;
    //const user = await req.user.save();
    res.end();
    
    });

}