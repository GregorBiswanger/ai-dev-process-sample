const express = require('express');
const app = express();
const PORT = 3000;

const jokes = [
  'Warum benutzen Programmierer immer Brillen? Weil sie nicht C sharp sehen!',
  'Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!',
  'Ein SQL-Statement geht in eine Bar, läuft gegen einen Tisch und fällt um.',
  'Warum können Java-Entwickler keine Beziehungen führen? Weil sie ständig NullPointerExceptions bekommen!',
  'Was ist der Lieblingssport von Entwicklern? Caching!',
  "Warum war der JavaScript-Entwickler traurig? Weil er 'null' nicht verstehen konnte.",
  'Wie nennt man einen Entwickler ohne Freundin? Full-Stack-Overflow!',
  'Warum trinken Programmierer keinen Kaffee? Weil sie schon genug Java haben!',
  'Was macht ein Backend-Entwickler im Fitnessstudio? API-Calls!',
  'Warum können Computer keine Witze erzählen? Sie haben zu wenig Cache!',
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Joke-Webservice läuft auf http://localhost:${PORT}`);
});
