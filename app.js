const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
require('./config/passport'); // Panggil konfigurasi Google OAuth

const app = express();

app.use(express.json());
app.use(passport.initialize());

// Middleware rate limiter, authRoutes, itemRoutes
const rateLimiter = require('./middleware/rateLimiter');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');

app.get('/', (req, res) => {
  res.send('Inventory API ready 🚀');
});
app.use(rateLimiter);
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Mongo Error:', err));

module.exports = app;
