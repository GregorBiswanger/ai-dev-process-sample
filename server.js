const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

const adminJokes = [
  {
    setup: 'Warum können Admins gut tanzen?',
    punchline: 'Weil sie immer den richtigen Rhythmus haben.',
  },
  { setup: 'Was sagt ein Admin, wenn er müde ist?', punchline: 'Ich bin ausgeloggt.' },
  {
    setup: 'Warum lieben Admins Kaffee?',
    punchline: 'Weil sie ohne ihn nicht booten können.',
  },
  { setup: 'Was macht ein Admin im Urlaub?', punchline: 'Er cached Erinnerungen.' },
  {
    setup: 'Warum sind Admins gute Freunde?',
    punchline: 'Weil sie immer ein Backup haben.',
  },
  {
    setup: 'Was sagt ein Admin, wenn er etwas nicht versteht?',
    punchline: 'Das ist nicht in meinem Protokoll.',
  },
  {
    setup: 'Warum sind Admins gute Köche?',
    punchline: 'Weil sie immer gut würzen können.',
  },
  {
    setup: 'Was macht ein Admin, wenn er sich langweilt?',
    punchline: 'Er pingt seine Freunde.',
  },
  {
    setup: 'Warum sind Admins gute Lehrer?',
    punchline: 'Weil sie immer gut erklären können.',
  },
  {
    setup: 'Was sagt ein Admin, wenn er etwas repariert hat?',
    punchline: 'Problem gelöst, System läuft.',
  },
];

// API endpoint to fetch jokes
app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * adminJokes.length);
  res.json(adminJokes[randomIndex]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
