const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
