const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  password: String // opsional, kalau login biasa juga didukung
});

module.exports = mongoose.model('User', userSchema);
