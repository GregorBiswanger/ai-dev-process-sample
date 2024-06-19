const http = require('http');

// Liste von Witzen
const jokes = [
  'Warum können Geister so schlecht lügen? Weil sie so leicht zu durchschauen sind.',
  'Ich habe einen Job in einer Bäckerei bekommen, weil ich Kekse liebe. Es ist ein hartes Brot.',
  'Warum gehen Taucher immer rückwärts über Bord? Weil sie sonst noch im Boot wären.',
];

// HTTP-Server erstellen
const server = http.createServer((req, res) => {
  if (req.url === '/joke' && req.method === 'GET') {
    // Zufälligen Witz auswählen
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(randomJoke);
  } else {
    res.writeHead(404);
    res.end('Nicht gefunden');
  }
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
