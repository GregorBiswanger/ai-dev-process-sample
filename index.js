import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  "Warum benutzen Programmierer keine Türme? Weil sie lieber Stack Overflow nutzen!",
  "Wie nennt ein Entwickler einen leeren Kühlschrank? NullPointerException!",
  "Warum können Java-Entwickler keine Beziehungen führen? Weil sie ständig nach einer Klasse suchen!",
  "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!",
  "Warum trinken Entwickler so viel Kaffee? Weil sie sonst in den Sleep-Mode fallen!",
  "Was ist der Lieblingssport von Entwicklern? Codenlauf!",
  "Warum sind Programmierer schlechte Gärtner? Sie lassen alles in Klammern stehen!",
  "Was macht ein Entwickler im Fitnessstudio? Pushen und Pullen!",
  "Warum können Programmierer keine Autos fahren? Sie verwechseln Gas mit Escape!",
  "Was sagt ein Entwickler, wenn er einen Fehler findet? It's not a bug, it's a feature!"
];

app.get('/api/jokes', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.listen(port, () => {
  console.log(`Joke Web-Service läuft auf http://localhost:${port}`);
});
