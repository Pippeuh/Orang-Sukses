// Simulasi IoT Virtual: Kirim data suhu via MQTT ke broker (contoh: Mosquitto)

const mqtt = require("mqtt");
const faker = require("@faker-js/faker").faker;

// Koneksi ke broker MQTT lokal
const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("🔌 Terhubung ke broker MQTT");
  
  // Publish data suhu tiap 5 detik ke topik iot/temperature
  setInterval(() => {
    const data = {
      deviceId: "sensor-001",
      timestamp: new Date().toISOString(),
      temperature: faker.datatype.number({ min: 15, max: 30 })
    };

    client.publish("iot/temperature", JSON.stringify(data));
    console.log("📡 Data dikirim:", data);
  }, 5000);
});
