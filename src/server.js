const http = require('http');

const app = require('./app');
const config = require('./config/config');

const httpServer = http.createServer(app);
httpServer.listen(config.port, () => {
  console.log(`🚀 Server ready at http://localhost:${config.port}/`);
});
