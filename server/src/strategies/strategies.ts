import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import passportGithub from 'passport-github2';
import passportFacebook from 'passport-facebook';
import passportDiscord from 'passport-discord';

import { User } from '../models/init-models';

const GoogleStrategy = passportGoogle.Strategy;
const GitHubStrategy = passportGithub.Strategy;
const FacebookStrategy = passportFacebook.Strategy;
const DiscordStrategy = passportDiscord.Strategy;

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.

passport.serializeUser<any, any>(
    (req: any, user: Express.User, done: (err: any, id?: any) => void) => {
        done(null, user);
    }
);

passport.deserializeUser((obj: any, done: (err: any, id?: any) => void) => {
    done(null, obj);
});

/** Google strategy */
passport.use(
    new GoogleStrategy(
        {
            clientID: '724678825700-4k8phjm2jdhpkfnddi1lgum1jkls89bh.apps.googleusercontent.com',
            clientSecret: '-Js8HLksgjV_2ntezf1x0s7l',
            callbackURL: '/auth/google/callback'
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
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

            console.log(selector);
            User.findOrCreate(selector)
                .then((result: [User, boolean]) => {
                    // user = result[0].dataValues;
                    return done(null, profile);
                })
                .catch((err) => {
                    return done(err, profile);
                });
        }
    )
);

/** Github strategy */
passport.use(
    new GitHubStrategy(
        {
            clientID: 'cea4b5582b1ba69d1778',
            clientSecret: 'ea82794f008d160658abba75d78141e3f22d674c',
            callbackURL: '/auth/github/callback'
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
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
                    // user = result[0].dataValues;
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
            clientID: '462108525090226',
            clientSecret: '3d459550ebe581c570feeaaee84bd4df',
            callbackURL: '/auth/facebook/callback',
            // scope: ['email'],
            profileFields: ['email', 'location', 'name', 'picture']
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
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
                    // user = result[0];
                    return done(null, profile);
                })
                .catch((err) => {
                    return done(err, profile);
                });
        }
    )
);

/** Discord strategy */
passport.use(
    new DiscordStrategy(
        {
            clientID: '849478551106486332',
            clientSecret: 'Z_IVrx4KbKD7AyTvmUh7gxLnanmT2XrS',
            callbackURL: '/auth/discord/callback',
            scope: ['identify', 'email']
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
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
                    // user = result[0];
                    return done(null, profile);
                })
                .catch((err) => {
                    return done(err, profile);
                });
        }
    )
);

export default passport;
