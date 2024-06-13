const http = require('http');

// Liste von Entwicklerwitzen
const jokes = [
  'Warum gehen Programmierer nicht gerne zum Arzt? Sie mögen keine Bugs.',
  'Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keine, das ist ein Hardwareproblem.',
  'Warum lieben Programmierer den Herbst? Weil es endlich wieder fall-through ist.',
  'Was ist ein Programmierer in der Dusche? Ein Software-Entwickler.',
  'Warum sitzen Python-Programmierer nie im Café? Weil sie keine Tabs mögen.',
];

// Anfrage-Handler
const requestHandler = (req, res) => {
  if (req.url === '/joke') {
    // Wähle einen zufälligen Witz aus
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(randomJoke);
  } else {
    // Hinweis für ungültige Pfade
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(
      'Nur der Pfad /joke wird unterstützt. Bitte versuche es erneut mit diesem Pfad.'
    );
  }
};

// Server erstellen
const server = http.createServer(requestHandler);

// Server starten
const port = 3000;
server.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
