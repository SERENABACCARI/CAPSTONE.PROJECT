import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleAuthStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3020/api/oauth"
},
    function (accessToken, refreshToken, profile, cb) {
        /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
             return cb(err, user);
         });*/
        console.log(profile)
    });

export default googleAuthStrategy;