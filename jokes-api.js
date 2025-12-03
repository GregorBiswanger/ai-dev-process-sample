const express = require('express');
const app = express();
const port = 3000;

const jokes = [
  { id: 1, joke: 'Warum können Programmierer keine Achterbahn fahren? Zu viele Loops!' },
  { id: 2, joke: 'Wie nennt man einen Entwickler ohne Freundin? Homeless.' },
  {
    id: 3,
    joke: 'Warum benutzen Java-Entwickler immer Brillen? Weil sie keine C# sehen können!',
  },
  {
    id: 4,
    joke: "Ein SQL-Statement geht in eine Bar, fragt nach einem Drink. Der Barkeeper sagt: 'Sorry, wir servieren hier keine Joins.'",
  },
  {
    id: 5,
    joke: 'Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!',
  },
  { id: 6, joke: "Warum war der JavaScript-Entwickler traurig? Weil er 'null' war." },
  { id: 7, joke: 'Was ist der Lieblingssport von Entwicklern? Codenlauf!' },
  {
    id: 8,
    joke: 'Warum können Programmierer keine Beziehungen führen? Zu viele unerwartete Exceptions.',
  },
  { id: 9, joke: 'Was macht ein Backend-Entwickler im Fitnessstudio? API-Training.' },
  {
    id: 10,
    joke: 'Warum gehen Entwickler nie raus? Sie haben Angst vor Bugs in der Wildnis.',
  },
];

app.get('/api/jokes', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

app.listen(port, () => {
  console.log(`Joke API läuft auf http://localhost:${port}/api/jokes`);
});
