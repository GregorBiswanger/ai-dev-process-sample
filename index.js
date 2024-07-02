const http = require('http');

// Array of developer jokes in German
const jokes = [
  "Warum lieben Programmierer dunkle Modi? Weil Licht Bugs anzieht.",
  "Warum tragen Java-Entwickler Brillen? Weil sie nicht C# können.",
  "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardwareproblem.",
  "Warum hassen Programmierer die Natur? Sie hat zu viele Bugs.",
  "Warum war der JavaScript-Entwickler traurig? Weil er nicht wusste, wie man Java macht."
];

const server = http.createServer((req, res) => {
  if (req.url === '/jokes') {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(randomJoke);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hallo Welt');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}/`);
});
