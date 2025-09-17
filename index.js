const http = require('http');

const jokes = [
  {
    id: 1,
    joke: 'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.',
  },
  { id: 2, joke: 'Was macht ein Pirat am Computer? Er drückt die Enter-Taste.' },
  {
    id: 3,
    joke: 'Warum können Elefanten nicht fliegen? Weil sie zu schwer für den Flugzeugmodus sind.',
  },
  { id: 4, joke: 'Was ist orange und läuft durch den Wald? Eine Wanderine.' },
  { id: 5, joke: 'Wie nennt man einen Bumerang, der nicht zurückkommt? Ein Stock.' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/api/joke' && req.method === 'GET') {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(randomJoke));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Joke-Service läuft auf http://localhost:${PORT}/api/joke`);
});
