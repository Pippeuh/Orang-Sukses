const mongoose = require("mongoose");

const temperatureSchema = new mongoose.Schema({
  deviceId: String,
  timestamp: Date,
  temperature: Number
});

module.exports = mongoose.model("Temperature", temperatureSchema);
