const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require("passport");
passport.use(
    new GoogleStrategy(
        {
            clientId: "138751730529-lqtlev7bvjqfap2o57n43qjnesvhmpe4.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: '/auth/google/callback',
            scope: ['profile', 'email']
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile)
        }
    )
)