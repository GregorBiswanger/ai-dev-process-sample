const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server läuft auf http://127.0.0.1:3000/');
});
