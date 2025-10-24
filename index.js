const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Liste von 10 Jokes
const jokes = [
  "Warum können Geister so schlecht lügen? – Weil man durch sie hindurchsehen kann.",
  "Warum ging der Pilz auf die Party? – Weil er ein Champignon (champion) war!",
  "Was macht ein Keks unter einem Baum? – Krümel.",
  "Warum hat der Mathebuch-Autor seinen Job gekündigt? – Zu viele Probleme.",
  "Wie nennt man einen Bumerang, der nicht zurückkommt? – Einen Stock.",
  "Warum können Seeräuber keinen Kreis zeichnen? – Weil sie Pi raten (piraten).",
  "Warum dürfen Geister keine Lügen erzählen? – Sie sind zu durchsichtig.",
  "Was sagt ein Keks, wenn er einen Witz hört? – Ich krümel vor Lachen.",
  "Warum können Fahrräder nicht alleine stehen? – Sie sind zweirädrig.",
  "Warum ist der Computer kalt? – Weil er viele Windows hat.",
];

app.get('/api/jokes', (req, res) => {
  const idx = Math.floor(Math.random() * jokes.length);
  res.json({ id: idx, joke: jokes[idx] });
});

app.get('/', (req, res) => {
  res.send('Joke Web-Service läuft. GET /api/jokes für einen zufälligen Joke.');
});

app.listen(port, () => {
  console.log(`Joke service listening on port ${port}`);
});
