const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  'Warum können Elefanten nicht fliegen? Weil sie zu schwer für den Flugzeugmodus sind!',
  'Was macht ein Pirat am Computer? Er drückt die Enter-Taste!',
  'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht!',
  'Wie nennt man einen Bumerang, der nicht zurückkommt? Ein Stock!',
  'Warum ging der Pilz auf die Party? Weil er ein Champignon war!',
  'Was macht ein Keks unter einem Baum? Krümel!',
  'Warum dürfen Geier nicht heiraten? Weil sie Aasfresser sind!',
  'Was ist orange und läuft durch den Wald? Eine Wanderine!',
  'Warum können Seeräuber den Kreis nicht berechnen? Weil sie Pi raten!',
  'Was macht ein Keks am Computer? Cookies akzeptieren!',
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Joke API läuft auf http://localhost:${PORT}/api/jokes`);
});
