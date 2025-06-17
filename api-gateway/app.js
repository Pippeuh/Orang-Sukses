const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  console.log(`[Gateway] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('API Gateway is running ✅');
});

// Routing berdasarkan path
app.use('/api/auth', createProxyMiddleware({ target: process.env.AUTH_SERVICE_URL, changeOrigin: true }));
app.use('/api/items', createProxyMiddleware({ target: process.env.INVENTORY_SERVICE_URL, changeOrigin: true }));
app.use('/api/iot', createProxyMiddleware({ target: process.env.IOT_SERVICE_URL, changeOrigin: true }));

module.exports = app;
