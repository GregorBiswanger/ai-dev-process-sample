const express = require('express');
const jokes = require('./jokes');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.listen(PORT, () => {
  console.log(`Joke API läuft auf http://localhost:${PORT}/api/jokes`);
});
