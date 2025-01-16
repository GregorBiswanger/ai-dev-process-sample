const http = require('http');

const jokes = [
    "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!",
    "Was ist orange und läuft durch den Wald? Eine Wanderine.",
    "Warum können Skelette so schlecht lügen? Weil sie leicht zu durchschauen sind.",
    "Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",
    "Warum können Seeräuber keine Kreise zeichnen? Weil sie Pi raten."
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