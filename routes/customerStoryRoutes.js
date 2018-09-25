const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits');
const CustomerStory = mongoose.model('customerstory');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');
module.exports = app =>{

    app.get('/api/customerstories', async (req, res) =>{
       //const customerstories = await Survey.find({_user: req.user.id})
       const customerstories = [
        { id: 1
          , name: 'Sukino'
          , heading:'A Home Care Story'
          , desctiption:'Sukino – a Wellness service provider, used a personalized video to explain the Homecare services to its customers. Video stitches the dynamic customer and nurse information along with the information on Services.'
          , videourl: 'Sukino.mp4' 
          , posterurl:'/poster/sukino.jpg'
          , published: '1'
          , displayorder: 1
    
         },
        { id: 2
          , name: 'Retail'
          , heading:'A Retail Buyer’s Story'
          , desctiption:'A Japanese firm*, uses Vidzai to leverage its customer buying information and the loyalty points to provide an unbeatable offer for next purchase. Rich visuals including dynamic images seals the deal.'
          , videourl: 'Retail.mp4' 
          , posterurl:'/poster/Retail.jpg' 
          , published: '1'
          , displayorder: 2
        },
        { id: 3
          , name: 'Smart Hospital'
          , heading:'A Patient Story'
          , desctiption:'One of the Asia’s largest hospitals* – A front runner tech enabled institution, used Vidzai to generate Personalized video for their international patients to provide information on the medical process. Video aims to augment various stages of the customer journey for the hospital.'
          , videourl: 'SmartHospital.mp4'
          , posterurl:'/poster/SmartHospital.jpg'
          , published: '1'
          , displayorder: 3
        },
        { id: 4
            , name: 'DPS'
            , heading:'An Event Invitation Story'
            , desctiption:'Delhi Public School used the Vidzai to generate Personalized video invitations for its Annual Day function. Personalization through Parent’s names coupled with the rich visuals created an engaging experience.'
            , videourl: 'DPS_Akbar.mp4'
            , posterurl:'/poster/DPS_Akbar.jpg'
            , published: '1'
            , displayorder: 4
          },
          { id: 5
            , name: 'HR'
            , heading:'A Recruitment Story'
            , desctiption:'A Japanese HR firm* specializing in Recruitment*, runs a AI engine that matches the demand with the candidate profiles. Vidzai could be used to distribute the recommendations to its customers (currently at a prototype stage).'
            , videourl: 'RecruitmentStory.mp4'
            , posterurl:'/poster/RecruitmentStory.jpg'
            , published: '0'
            , displayorder: 5
          },
    
    
        //{id: 4, name: 'clara2', videourl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', posterurl:'/poster/Picture1.png'},
        //{id: 5, name: 'clara3', videourl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' , posterurl:'/poster/Picture1.png'},
      ]
         
       res.send(customerstories.filter(x=> x.published === '1'));  
    });


    //app.post('/api/customerstories', requireLogin, requireCredits, async (req,res) =>{
      app.post('/api/customerstories', async (req,res) =>{
      const {name, heading, description, videourl, posterurl, published, displayorder} = req.body;
      const customerstory = new CustomerStory({
          name,
          heading,
          description,
          videourl,
          posterurl,
          published,
          displayorder,
          createDate: Date.now(),
          updateDate: Date.now()


      });
    // Place to send mailer

    //const mailer = new Mailer(customerstory, surveyTemplate(customerstory) );
    //await mailer.send();
    await customerstory.save();
    //req.user.credits -=1;
    //const user = await req.user.save();

    res.end();
    
    });

}