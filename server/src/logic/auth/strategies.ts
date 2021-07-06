import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import passportGithub from 'passport-github2';
import passportFacebook from 'passport-facebook';
import passportDiscord from 'passport-discord';

import { UserService } from '../../sql-dal/User';
import { User } from '../../graphql/entities/User';

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

passport.serializeUser<any, any>((req: any, user: any, done: (err: any, id?: any) => void) => {
    done(null, user);
});

passport.deserializeUser((obj: any, done: (err: any, id?: any) => void) => {
    done(null, obj);
});

/** Google strategy */
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
            const user = {
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                picture: profile._json.picture,
                email: profile._json.email,
                locale: profile._json.locale,
                role: 'user',
                provider: 'google'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, result.id);
                })
                .catch((err: any) => {
                    return done(err, profile);
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
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
            const user = {
                firstName: profile._json.login,
                lastName: profile._json.login,
                picture: profile._json.avatar_url,
                email: profile._json.html_url,
                locale: profile._json.location,
                provider: 'github'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, user);
                })
                .catch((err: any) => {
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
            // scope: ['email'],
            profileFields: ['email', 'location', 'name', 'picture']
        },
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
            const user = {
                firstName: profile._json.first_name,
                lastName: profile._json.last_name,
                picture: profile._json.picture.data.url,
                email: profile._json.email,
                locale: profile._json.location ? profile._json.location : null,
                provider: 'facebook'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, user);
                })
                .catch((err: any) => {
                    return done(err, profile);
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
        (accessToken: any, refreshToken: any, profile: any, done: (err: any, id?: any) => void) => {
            const user = {
                firstName: profile.username,
                lastName: profile.username,
                picture: profile.avatar,
                email: profile.email,
                locale: profile.locale,
                provider: 'discord'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, user);
                })
                .catch((err: any) => {
                    return done(err, profile);
                });
        }
    )
);

export default passport;
