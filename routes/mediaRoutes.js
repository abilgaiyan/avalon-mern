const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const Contactus = mongoose.model('contactus');
const contactusTemplate = require('../services/emailTemplate/contactusTemplate');
const video_streamer = require('../middlewares/video_streamer');

module.exports = app =>{
    app.get('/api/videourl/:videourl',  video_streamer.streamMovie); 
}