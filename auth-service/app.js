const express = require('express');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Konfigurasi Google OAuth

const rateLimiter = require('./middleware/rateLimiter');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(rateLimiter);

app.get('/', (req, res) => res.send('Auth Service Ready ✅'));
app.use('/api/auth', authRoutes);

module.exports = app;
