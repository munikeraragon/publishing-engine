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
                firstName: String(profile._json.given_name),
                lastName: String(profile._json.family_name),
                picture: String(profile._json.picture),
                userName: String(profile._json.email).replace(/@.*$/, ''),
                email: String(profile._json.email),
                locale: String(profile._json.locale),
                role: 'USER',
                provider: 'google'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, { id: result.id, role: result.role });
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
                firstName: String(profile._json.login),
                lastName: String(profile._json.login),
                userName: String(profile._json.login),
                picture: String(profile._json.avatar_url),
                email: String(profile._json.html_url),
                locale: String(profile._json.location),
                role: 'USER',
                provider: 'github'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, { id: result.id, role: result.role });
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
                firstName: String(profile._json.first_name),
                lastName: String(profile._json.last_name),
                picture: String(profile._json.picture.data.url),
                email: String(profile._json.email),
                userName: String(profile._json.email).replace(/@.*$/, ''),
                locale: String(profile._json.location),
                role: 'USER',
                provider: 'facebook'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, { id: result.id, role: result.role });
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
                firstName: String(profile.username),
                lastName: String(profile.username),
                userName: String(profile.username),
                picture: String(profile.avatar),
                email: String(profile.email),
                locale: String(profile.locale),
                role: 'USER',
                provider: 'discord'
            };
            UserService.findOrCreate(user)
                .then((result: User) => {
                    console.log(result);
                    return done(null, { id: result.id, role: result.role });
                })
                .catch((err: any) => {
                    return done(err, profile);
                });
        }
    )
);

export default passport;
