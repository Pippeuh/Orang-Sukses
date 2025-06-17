const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const itemRoutes = require('./routes/itemRoutes');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();
app.use(express.json());
app.use(rateLimiter);

app.get('/', (req, res) => res.send('Inventory Service Ready ✅'));
app.use('/api/items', itemRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('📦 MongoDB connected (inventory-service)'))
.catch(err => console.error('❌ MongoDB error:', err));

// Read TLS certs
const certPath = path.join(__dirname, 'certs');
const options = {
  key: fs.readFileSync(path.join(certPath, 'key.pem')),
  cert: fs.readFileSync(path.join(certPath, 'cert.pem'))
};

// Start HTTPS server
const PORT = process.env.PORT || 5001;
https.createServer(options, app).listen(PORT, () => {
  console.log(`🚀 Inventory service running at https://localhost:${PORT}`);
});
