const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  jumlah: { type: Number, required: true },
  lokasi: { type: String },
  status: { type: String, enum: ['tersedia', 'dikirim', 'habis'], default: 'tersedia' }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
