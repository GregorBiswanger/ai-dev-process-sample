const http = require('http');

const jokes = [
  'Warum können Programmierer keine guten Tänzer sein? Weil sie immer den gleichen Schritt wiederholen!',
  'Warum können Java-Entwickler keine Pausen einlegen? Weil sie keine Kaffeepause machen können!',
  'Warum können Entwickler keine Geheimnisse bewahren? Weil sie immer alles debuggen müssen!',
  'Warum können Programmierer keine guten Gärtner sein? Weil sie immer nur Bugs finden!',
  'Warum können Entwickler keine guten Musiker sein? Weil sie immer nur auf den gleichen Tasten herumhacken!',
  'Warum sind Entwickler wie Götter? Weil sie aus dem Nichts etwas erschaffen können!',
  'Warum können Entwickler keine guten Köche sein? Weil sie immer nur Spaghetti-Code machen!',
  'Warum können Entwickler keine guten Schriftsteller sein? Weil sie immer nur in einer Sprache schreiben!',
  'Warum können Entwickler keine guten Architekten sein? Weil sie immer nur an der gleichen Struktur arbeiten!',
  'Warum können Entwickler keine guten Lehrer sein? Weil sie immer nur in einer Schleife erklären!'
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
