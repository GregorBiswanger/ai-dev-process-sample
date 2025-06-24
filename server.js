const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

const devJokes = [
  {
    setup: 'Warum können Entwickler gut tanzen?',
    punchline: 'Weil sie immer den richtigen Algorithmus haben.',
  },
  { setup: 'Was sagt ein Entwickler, wenn er müde ist?', punchline: 'Ich bin ausgeloggt.' },
  {
    setup: 'Warum lieben Entwickler Kaffee?',
    punchline: 'Weil sie ohne ihn nicht kompilieren können.',
  },
  { setup: 'Was macht ein Entwickler im Urlaub?', punchline: 'Er committed Erinnerungen.' },
  {
    setup: 'Warum sind Entwickler gute Freunde?',
    punchline: 'Weil sie immer ein Backup-Repository haben.',
  },
  {
    setup: 'Was sagt ein Entwickler, wenn er etwas nicht versteht?',
    punchline: 'Das ist nicht in meiner Dokumentation.',
  },
  {
    setup: 'Warum sind Entwickler gute Köche?',
    punchline: 'Weil sie immer gut debuggen können.',
  },
  {
    setup: 'Was macht ein Entwickler, wenn er sich langweilt?',
    punchline: 'Er refactored seinen Code.',
  },
  {
    setup: 'Warum sind Entwickler gute Lehrer?',
    punchline: 'Weil sie immer gut kommentieren können.',
  },
  {
    setup: 'Was sagt ein Entwickler, wenn er etwas repariert hat?',
    punchline: 'Bug gefixt, Code läuft.',
  },
];

// API endpoint to fetch jokes
app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * devJokes.length);
  res.json(devJokes[randomIndex]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
