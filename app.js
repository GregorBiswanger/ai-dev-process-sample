const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  'Warum benutzen Programmierer immer dunkle Themes? Weil das Licht Bugs anzieht!',
  'Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!',
  'Warum können Java-Entwickler keine Beziehungen führen? Weil sie ständig nach einer neuen Instanz suchen!',
  'Ein SQL-Statement geht in eine Bar, sieht zwei Tische und fragt: Kann ich mich zu euch joinen?',
  'Warum sind Programmierer schlechte Gärtner? Sie lassen zu viele Branches wachsen!',
  'Was ist der Lieblingssport von Entwicklern? Coden!',
  'Warum trinken Entwickler so viel Kaffee? Weil sie sonst in den Sleep-Mode gehen!',
  'Was macht ein Frontend-Entwickler im Fahrstuhl? Er styled die Buttons!',
  'Warum können Computer keine Witze erzählen? Sie haben keinen Humor-Handler!',
  'Was sagt ein Entwickler, wenn er aus dem Urlaub kommt? Merge conflict!',
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Joke API läuft auf http://localhost:${PORT}/api/jokes`);
});
