const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;

const { User } = require('../models');

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

/** Google strategy */
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, cb) => {
            const selector = {
                where: { email: profile._json.email, firstName: profile._json.given_name },
                defaults: {
                    firstName: profile._json.given_name,
                    lastName: profile._json.family_name,
                    picture: profile._json.picture,
                    email: profile._json.email,
                    locale: profile._json.locale,
                    provider: 'google'
                }
            };
            User.findOrCreate(selector)
                .then((result) => {
                    user = result[0].dataValues;
                    return cb(null, profile);
                })
                .catch((err) => {
                    return cb(err, profile);
                });
        }
    )
);

/** Github strategy */
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: '/auth/github/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            const selector = {
                where: { email: profile._json.html_url, firstName: profile._json.login },
                defaults: {
                    firstName: profile._json.login,
                    lastName: profile._json.login,
                    picture: profile._json.avatar_url,
                    email: profile._json.html_url,
                    locale: profile._json.location,
                    provider: 'github'
                }
            };
            User.findOrCreate(selector)
                .then((result) => {
                    user = result[0].dataValues;
                    return done(null, profile);
                })
                .catch((err) => {
                    return done(err, profile);
                });
        }
    )
);

/** Facebook strategy */
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
            scope: ['email'],
            profileFields: ['email', 'location', 'name', 'picture']
        },
        (accessToken, refreshToken, profile, cb) => {
            const selector = {
                where: { email: profile._json.email, firstName: profile._json.first_name },
                defaults: {
                    firstName: profile._json.first_name,
                    lastName: profile._json.last_name,
                    picture: profile._json.picture.data.url,
                    email: profile._json.email,
                    locale: profile._json.location ? profile._json.location : null,
                    provider: 'facebook'
                }
            };
            User.findOrCreate(selector)
                .then((result) => {
                    user = result[0];
                    return cb(null, profile);
                })
                .catch((err) => {
                    return cb(err, profile);
                });
        }
    )
);

/** Discord strategy */
passport.use(
    new DiscordStrategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: '/auth/discord/callback',
            scope: ['identify', 'email']
        },
        (accessToken, refreshToken, profile, cb) => {
            const selector = {
                where: { email: profile.email, firstName: profile.username },
                defaults: {
                    firstName: profile.username,
                    lastName: profile.username,
                    picture: profile.avatar,
                    email: profile.email,
                    locale: profile.locale,
                    provider: 'discord'
                }
            };
            User.findOrCreate(selector)
                .then((result) => {
                    user = result[0];
                    return cb(null, profile);
                })
                .catch((err) => {
                    return cb(err, profile);
                });
        }
    )
);
