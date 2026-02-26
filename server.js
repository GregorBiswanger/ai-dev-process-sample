const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  { id: 1, joke: 'Warum können Geister so schlecht lügen? Weil man durch sie hindurchsieht.' },
  { id: 2, joke: 'Ich habe ein Buch über Antigravitation gelesen. Ich konnte es nicht mehr weglegen.' },
  { id: 3, joke: 'Warum trinken Programmierer lieber dunkel? Weil Licht Bugs anzieht.' },
  { id: 4, joke: 'Treffen sich zwei Parallelgeraden. Sagt die eine: Wir sehen uns in der Unendlichkeit.' },
  { id: 5, joke: 'Ich wollte einen Witz über UDP machen, aber ich weiß nicht, ob er ankommt.' },
  { id: 6, joke: 'Warum sind Java-Entwickler immer so müde? Weil sie ständig Klassen haben.' },
  { id: 7, joke: 'Mein WLAN ist wie ein guter Witz: Es hat manchmal Aussetzer.' },
  { id: 8, joke: 'Warum hat der Entwickler eine Brille? Weil er C# nicht sehen konnte.' },
  { id: 9, joke: 'Ich esse keine Uhr mehr. Das ist einfach zu zeitaufwendig.' },
  { id: 10, joke: 'Was macht ein Informatiker im Fahrstuhl? Er drückt auf Esc.' },
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.status(200).json(jokes[randomIndex]);
});

app.listen(port, () => {
  console.log(`Joke API läuft auf Port ${port}`);
});
