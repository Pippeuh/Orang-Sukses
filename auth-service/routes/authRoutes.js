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
    // req.user = { user: ..., token: ... }
    res.json({
      message: '✅ Google login success',
      token: req.user.token,
      user: req.user.user
    });
  }
);

module.exports = router;
