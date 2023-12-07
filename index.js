const http = require('http');
const helmet = require('helmet');
const compression = require('compression');
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpuCount = os.cpus().length;
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
} else {
    const express = require('express');
    const app = express();

    app.use(compression());
    app.use(helmet());

    app.use(compression());

    app.get('/', (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello World');
    });

    const server = http.createServer(app);

    server.listen(3000, 'localhost', () => {
        console.log(`Server running at http://localhost:3000/ and worker ${cluster.worker.id} is running!`);
    });
}