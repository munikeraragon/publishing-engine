const passport = require('passport');
const router = require('express').Router();
const authStrategies = require('../strategies/strategies');

/** Google authentication */
router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'https://codegrow.org' }),
    (req, res) => {
        res.redirect('https://codegrow.org');
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
    passport.authenticate('github', { failureRedirect: 'https://codegrow.org' }),
    (req, res) => {
        res.redirect('https://codegrow.org');
    }
);

/** Facebook authentication */
router.get('/facebook', passport.authenticate('facebook'));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'https://codegrow.org' }),
    (req, res) => {
        res.redirect('https://codegrow.org');
    }
);

/** Discord authentication */
router.get('/discord', passport.authenticate('discord'));
router.get(
    '/discord/callback',
    passport.authenticate('discord', { failureRedirect: 'https://codegrow.org' }),
    (req, res) => {
        res.redirect('https://codegrow.org');
    }
);

module.exports = router;
