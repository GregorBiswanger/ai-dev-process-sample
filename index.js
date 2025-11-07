const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann.',
  'Was macht ein Pirat am Computer? Er drückt die Enter-Taste.',
  'Warum ging der Pilz auf die Party? Weil er ein Champignon war.',
  'Wie nennt man ein kluges Mammut? Ein Erinnerungskünstler.',
  'Treffen sich zwei Jäger. Beide tot.',
  'Was ist orange und läuft durch den Wald? Eine Wanderine.',
  'Warum nehmen Mathematiker immer eine Leiter mit ins Büro? Wegen der höheren Zahlen.',
  'Was macht ein Keks unter einem Baum? Krümel.',
  'Was ist unsichtbar und riecht nach Karotten? Ein Hasenfurz.',
  'Warum können Geheimagenten nie Tennis spielen? Weil sie ihre Schläger immer geheim halten.',
];

app.get('/api/jokes', (request, response) => {
  const idx = Math.floor(Math.random() * jokes.length);
  response.json({ joke: jokes[idx] });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Jokes API läuft auf http://localhost:${port}`);
});
