import passport from 'passport';
import { Router } from 'express';
import '../strategies/strategies';

const router = Router();

const getClientAddress = () => {
    if (process.env.MODE === 'production') {
        return 'https://codegrow.org';
    } else {
        return 'http://localhost:3000';
    }
};

/** Google authentication */
router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: getClientAddress() }),
    (req, res) => {
        res.redirect(getClientAddress());
    }
);

/** Github authentication */
router.get(
    '/github',
    passport.authenticate('github', {
        scope: ['user:email']
    })
);
router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: getClientAddress() }),
    (req, res) => {
        res.redirect(getClientAddress());
    }
);

/** Facebook authentication */
router.get('/facebook', passport.authenticate('facebook'));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: getClientAddress() }),
    (req, res) => {
        res.redirect(getClientAddress());
    }
);

/** Discord authentication */
router.get('/discord', passport.authenticate('discord'));
router.get(
    '/discord/callback',
    passport.authenticate('discord', { failureRedirect: getClientAddress() }),
    (req, res) => {
        res.redirect(getClientAddress());
    }
);

export default router;
