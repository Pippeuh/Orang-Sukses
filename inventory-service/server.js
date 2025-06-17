const https = require('https');
const fs = require('fs');
const app = require('./app');
const path = require('path');

const PORT = process.env.PORT || 5002;

const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs/cert.pem')),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`📦 Inventory Service running at https://localhost:${PORT}`);
});
