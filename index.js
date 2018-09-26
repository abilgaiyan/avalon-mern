const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User');
require('./models/Survey');
require('./models/Contactus');
require('./models/CustomerStory');
require('./services/passport');
require('./models/Customer');
//console.log(keys.mongodbURL)

mongoose.connect(keys.mongodbURL);
//mongoose.connect('mongodb://Avalon:Avalon@ds145178.mlab.com:45178/Avalon-dev');


const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys : [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/contactusRoutes')(app);
require('./routes/mediaRoutes')(app);
require('./routes/customerStoryRoutes')(app);
require('./routes/customerRoutes')(app);


// For Production environment
if (process.env.NODE_ENV ==='production'){
  // Express will serve up production assets
  // like our main.js or main.css file!
  app.use(express.static('/client/build'));
//   app.use(express.static('/client/build/css'));
//   app.use(express.static('/client/build/fonts'));
//   app.use(express.static('/client/build/img'));
//   app.use(express.static('/client/build/static'));
//   app.use(express.static('/client/build/static/css'));
//   app.use(express.static('/client/build/static/js'));
//   app.use(express.static('/client/build/static/js/vendor'));


 // app.use(express.static('/client/public'));

  
  // Express will server index.html file
  // if it does'not reconizes the route
  // code will execute for client side router defined 

  const path = require('path');
  app.get('*', (req, res) =>{
     res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('listening on port', PORT);
})

// https://quiet-eyrie-51962.herokuapp.com/