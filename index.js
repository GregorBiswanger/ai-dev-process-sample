const http = require('http');
const url = require('url');

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem."
];

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true);
  if (parsedUrl.pathname === '/jokes') {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(joke);
  } else {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server läuft auf http://127.0.0.1:3000/');
});
