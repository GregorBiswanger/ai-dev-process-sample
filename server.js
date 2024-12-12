const http = require('http');

const jokes = [
  'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann!',
  'Warum können Seeräuber den Kreis nicht berechnen? Weil sie Pi raten!',
  'Warum können Skelette keine Lügen erzählen? Weil sie keinen Körper haben, um sie zu verstecken!',
  'Warum können Mathematiker so gut backen? Weil sie Pi lieben!',
  'Warum können Computer keine guten Tänzer sein? Weil sie immer abstürzen!',
];

const server = http.createServer((request, response) => {
  if (request.url === '/api/jokes' && request.method === 'GET') {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ joke: randomJoke }));
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
