// Keys for production --  commit it
module.exports ={
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongodbURL: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePubilishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridApiKey: process.env.SENDGRID_API_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN,
    videourlpath: process.env.VIDEO_URL_PATH,
    posterurlpath: process.env.POSTER_URL_PATH
}