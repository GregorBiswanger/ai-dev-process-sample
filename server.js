const express = require('express');
const app = express();
const PORT = 3000;

// Middleware für statische Dateien
app.use(express.static('public'));

// API-Endpunkt für Witze
const jokes = [
  'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann!',
  'Warum können Seeräuber keinen Kreis zeichnen? Weil sie immer Pi raten!',
  'Warum können Elefanten nicht fliegen? Weil sie keinen Pilotenschein haben!',
  'Warum können Elefanten nicht fliegen? Weil sie keinen Pilotenschein haben!',
  'Warum können Elefanten nicht fliegen? Weil sie keinen Pilotenschein haben!',
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

// Root-Endpunkt für die Webseite
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
