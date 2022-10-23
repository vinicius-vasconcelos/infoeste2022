require('dotenv').config();
const server = require('./app');

const PORT = process.env.PORT;

server.listen(PORT, console.log(`SERVER RUNNING IN http://localhost:${PORT}`));