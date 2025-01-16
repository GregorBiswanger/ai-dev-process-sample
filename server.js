const http = require('http');

const jokes = [
    "Warum benutzen Programmierer keine Sonnencreme? Weil sie nicht wollen, dass ihre Codes verbrennen.",
    "Warum können Java-Entwickler keine Strg-Taste benutzen? Weil sie keine Kontrolle haben.",
    "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem.",
    "Warum sind Programmierer so schlecht im Tennis? Weil sie immer nur Null-Pointer treffen.",
    "Warum können Programmierer keine Witze erzählen? Weil sie immer nur Bugs einbauen."
];

const server = http.createServer((req, res) => {
    if (req.url === '/api/jokes' && req.method === 'GET') {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ joke: randomJoke }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
