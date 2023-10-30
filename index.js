const http = require('http');

const server = http.createServer((request, response) => {
    try {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Hello World</h1>');
        response.end();
    } catch (error) {
        console.error(error);
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.write('Internal Server Error');
        response.end();
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Server läuft auf Port 3000');
});
