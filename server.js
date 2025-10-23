const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  {
    id: 1,
    joke: 'Warum können Elefanten nicht fliegen? Weil sie zu schwer für den Flugzeugmodus sind.',
  },
  { id: 2, joke: 'Was macht ein Pirat am Computer? Er drückt die Enter-Taste.' },
  {
    id: 3,
    joke: 'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.',
  },
  { id: 4, joke: 'Wie nennt man einen Bumerang, der nicht zurückkommt? Ein Stock.' },
  { id: 5, joke: 'Was ist orange und läuft durch den Wald? Eine Wanderine.' },
  { id: 6, joke: 'Warum dürfen Geier nicht heiraten? Weil sie Aasfresser sind.' },
  { id: 7, joke: 'Was macht ein Keks unter einem Baum? Krümel.' },
  {
    id: 8,
    joke: 'Wie nennt man einen Hund ohne Beine? Ist doch egal, er kommt eh nicht.',
  },
  { id: 9, joke: 'Warum können Seeräuber den Kreis nicht berechnen? Weil sie Pi raten.' },
  { id: 10, joke: 'Was macht ein Mathematiker im Garten? Wurzeln ziehen.' },
];

app.get('/api/jokes', (request, response) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  response.json(jokes[randomIndex]);
});

app.listen(PORT, () => {
  console.log(`Joke-Service läuft auf http://localhost:${PORT}`);
});
