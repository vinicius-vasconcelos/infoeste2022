const server = require('./app');

const PORT = 30001;

server.listen(PORT, console.log(`SERVER RUNNING IN http://localhost:${PORT}`));
