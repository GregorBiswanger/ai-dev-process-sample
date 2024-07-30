const http = require('http');

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why do Java developers wear glasses? Because they don't see sharp.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do Python programmers prefer using snake_case? Because they don't like camelCase."
];

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

const server = http.createServer((req, res) => {
  if (req.url === '/jokes') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(getRandomJoke() + '\n');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
