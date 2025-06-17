const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Local Register & Login
router.post('/register', authController.register);
router.post('/login', authController.login);

// Google OAuth Login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    res.json({ token: req.user.token });
  }
);


module.exports = router;
