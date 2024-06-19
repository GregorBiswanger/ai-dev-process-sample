const http = require('http');

// Array of developer jokes
const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why do Java developers wear glasses? Because they can't C#.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why was the JavaScript developer sad? Because he didn't know how to Java."
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
    res.end('Hello World');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}/`);
});
