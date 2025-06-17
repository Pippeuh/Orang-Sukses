const mongoose = require("mongoose");
const mqtt = require("mqtt");
const Temperature = require("./models/temperatureModel");

// Koneksi ke MongoDB
mongoose.connect("mongodb://mongo:27017/iotdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("🗃️ Terhubung ke MongoDB");
}).catch(console.error);

// Koneksi ke broker MQTT
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("🔌 Terhubung ke broker MQTT");
  client.subscribe("iot/temperature");
});

client.on("message", async (topic, message) => {
  if (topic === "iot/temperature") {
    try {
      const data = JSON.parse(message.toString());
      const temp = new Temperature(data);
      await temp.save();
      console.log("💾 Data suhu disimpan:", data);
    } catch (err) {
      console.error("❌ Gagal simpan data:", err.message);
    }
  }
});
