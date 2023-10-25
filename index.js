const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});