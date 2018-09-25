const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id)
     .then(user => {
       done(null,user);
     });

})
//console.log(keys.googleClientId);
passport.use(
  
    new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
   }, 
   async (accessToken, refreshToken, profile, done)=>{
    //   console.log('accessToken',accessToken);
    //   console.log('refreshToken',refreshToken);
      //console.log('profile',profile);

     // console.log('profile',profile.id);
     const existingUser = await User.findOne({googleId: profile.id})
     if (existingUser){
        // User is lready save in the database with this googleid
          done(null,existingUser);
     }
          else{
            // user does not exists , save it to our database  
            const user = await new User({googleId: profile.id}).save();
            done(null,user);
          }
      

    
    }
  )
);
