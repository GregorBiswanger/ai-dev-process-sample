const httpModule = require('http');

const handleIncomingRequest = (request, response) => {
  if (request.method !== 'GET') {
    response.statusCode = 400;
    response.end('Invalid request method.\n');
    return;
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ message: 'Hello World' }));
};

const server = httpModule.createServer(handleIncomingRequest);

const SERVER_PORT = 3000;
server.listen(SERVER_PORT, () => console.log(`Server running at http://localhost:${SERVER_PORT}/`));

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err);
  process.exit(1);
});