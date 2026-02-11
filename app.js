const express = require('express');
const app = express();

const jokes = [
  "Warum benutzen Programmierer immer Brillen? Weil sie nicht C sehen!",
  "Wie nennt man einen Entwickler ohne Freundin? Homogit!",
  "Warum können Java-Entwickler keine Beziehungen führen? Weil sie ständig NullPointerExceptions haben!",
  "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!",
  "Warum trinken Entwickler so viel Kaffee? Weil sie ohne Java nicht starten können!",
  "Was ist der Lieblingssport von Entwicklern? Codenlauf!",
  "Warum sind Programmierer schlechte Gärtner? Sie lassen immer alles verwelken, weil sie zu viele Bugs haben!",
  "Was macht ein Frontend-Entwickler beim Friseur? Er lässt sich die Spitzen refactoren!",
  "Warum können Computer keine Witze erzählen? Sie haben zu wenig Cache!",
  "Was sagt ein Entwickler, wenn er ins Fitnessstudio geht? Push, Pull, Commit!"
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Joke API läuft auf Port ${PORT}`);
});
