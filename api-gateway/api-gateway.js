// File: api-gateway/server.js
const express = require('express');
const httpProxy = require('http-proxy');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const proxy = httpProxy.createProxyServer();

// Logging sederhana
app.use((req, res, next) => {
  console.log(`[Gateway] ${req.method} ${req.url}`);
  next();
});

// Routing semua permintaan ke backend (inventory-service)
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:5001' });
});

// Tangani error proxy
proxy.on('error', (err, req, res) => {
  res.status(500).json({ message: 'Gateway error', error: err.message });
});

// Jalankan API Gateway
const PORT = process.env.GATEWAY_PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
