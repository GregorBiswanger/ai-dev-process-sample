const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why do Java developers wear glasses? Because they don't see sharp.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do programmers hate nature? It has too many bugs.",
  "Why do Python programmers prefer to eat at restaurants? Because they don't like to deal with exceptions."
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/jokes') {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(randomJoke + '\n');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
