const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
require('./models/Survey');
require('./models/Contactus');
require('./models/CustomerStory');
require('./models/Customer');
require('./models/CustomerAllData');
require('./models/CustomerEmail');
require('./models/CustomerPhones');
require('./models/CustomerQueries');
//New Models
require('./models/CustomerInfo');
require('./models/WebsiteStatus');
require('./models/AvalonInfo');
require('./models/BillingInfo');
require('./models/WebsiteInfo');
require('./models/ProductInfo');
require('./models/AshiMicroWebsiteInfo');
require('./models/DomainInfo');
require('./models/SSLInfo');
require('./models/BusinessEmailInfo');
require('./models/EmailMarketingAccountInfo');
require('./models/TargetAreas');
require('./models/CallLog');
require('./models/ProductPlan');
require('./models/HostingAmount');
require('./models/DesignType');
require('./models/AshiProductStatus');
require('./models/PreviousCallType');
require('./models/QuerySupportInfo');



//console.log(keys.mongodbURL)

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodbURL);
//mongoose.connect('mongodb://Avalon:Avalon@ds145178.mlab.com:45178/Avalon-dev');

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
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
require('./routes/customerAllDataRoutes')(app);
require('./routes/customerPhonesRoutes')(app);
require('./routes/customerQueriesRoutes')(app);
require('./routes/customerEmailRoutes')(app);
//New Routes
require('./routes/customerInfoRoutes')(app);
require('./routes/avalonInfoRoutes')(app);
require('./routes/billingInfoRoutes')(app);
require('./routes/websiteInfoRoutes')(app);
require('./routes/productInfoRoutes')(app);
require('./routes/ashiMicrowebsiteInfoRoutes')(app);
require('./routes/domainInfoRoutes')(app);
require('./routes/sslInfoRoutes')(app);
require('./routes/businessEmailInfoRoutes')(app);
require('./routes/emailMarketingInfoRoutes')(app);
require('./routes/targetAreasRoutes')(app);
require('./routes/callLogRoutes')(app);
require('./routes/productplanRoutes')(app);
require('./routes/hostingAmountRoutes')(app);
require('./routes/communicationLogRouter')(app);



// For Production environment
if (process.env.NODE_ENV === 'production') {
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
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

//https://avalon-mkt.herokuapp.com/ | https://git.heroku.com/avalon-mkt.git