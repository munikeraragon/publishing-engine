import passport from 'passport';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import '../logic/auth/strategies';

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
    (req, res, next) => {
        const token = jwt.sign({ id: req.user }, process.env.JWT_SERVER_SECRET, {
            expiresIn: 60 * 15
        });
        req.logIn(req.user, function (err) {
            if (err) return next(err);
            res.redirect(
                getClientAddress() + `/dashboard?accessToken=${token}&refreshToken=${token}`
            );
        });
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
    (req, res, next) => {
        const token = jwt.sign({ id: req.user }, process.env.JWT_SERVER_SECRET, {
            expiresIn: 60 * 15
        });
        req.logIn(req.user, function (err) {
            if (err) return next(err);
            res.redirect(
                getClientAddress() + `/dashboard?accessToken=${token}&refreshToken=${token}`
            );
        });
    }
);

/** Facebook authentication */
router.get('/facebook', passport.authenticate('facebook'));
router.get(
    '/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: getClientAddress() }),
    (req, res, next) => {
        const token = jwt.sign({ id: req.user }, process.env.JWT_SERVER_SECRET, {
            expiresIn: 60 * 15
        });
        req.logIn(req.user, function (err) {
            if (err) return next(err);
            res.redirect(
                getClientAddress() + `/dashboard?accessToken=${token}&refreshToken=${token}`
            );
        });
    }
);

/** Discord authentication */
router.get('/discord', passport.authenticate('discord'));
router.get(
    '/discord/callback',
    passport.authenticate('discord', { failureRedirect: getClientAddress() }),
    (req, res, next) => {
        const token = jwt.sign({ id: req.user }, process.env.JWT_SERVER_SECRET, {
            expiresIn: 60 * 15
        });
        req.logIn(req.user, function (err) {
            if (err) return next(err);
            res.redirect(
                getClientAddress() + `/dashboard?accessToken=${token}&refreshToken=${token}`
            );
        });
    }
);

export default router;
