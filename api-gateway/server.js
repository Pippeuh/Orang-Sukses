const app = require('./app');
require('dotenv').config();

const PORT = process.env.GATEWAY_PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚪 API Gateway listening at http://localhost:${PORT}`);
});
