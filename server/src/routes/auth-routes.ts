import passport from 'passport';
import { Router } from 'express';
import '../strategies/strategies';

const router = Router();

/** Google authentication */
router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    (req, res) => {
        res.redirect('http://localhost:3000');
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
    passport.authenticate('github', { failureRedirect: 'http://localhost:3000' }),
    (req, res) => {
        res.redirect('http://localhost:3000');
    }
);

/** Facebook authentication */
router.get('/facebook', passport.authenticate('facebook'));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'http://localhost:3000' }),
    (req, res) => {
        res.redirect('http://localhost:3000');
    }
);

/** Discord authentication */
router.get('/discord', passport.authenticate('discord'));
router.get(
    '/discord/callback',
    passport.authenticate('discord', { failureRedirect: 'http://localhost:3000' }),
    (req, res) => {
        res.redirect('http://localhost:3000');
    }
);

export default router;
