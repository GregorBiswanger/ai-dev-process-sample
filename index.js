const httpModule = require('http');

const handleIncomingRequest = (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
};

const server = httpModule.createServer(handleIncomingRequest);

const SERVER_PORT = 3000;
server.listen(SERVER_PORT, () => console.log(`Server running at http://localhost:${SERVER_PORT}/`));
