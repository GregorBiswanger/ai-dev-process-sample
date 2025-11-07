const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  'Warum benutzen Programmierer nie die Tür? Weil sie lieber durch die Fenster gehen!',
  'Wie nennt man einen Programmierer ohne Freundin? Homeless!',
  'Warum können Java-Entwickler keine Beziehungen führen? Weil sie ständig nach einer neuen Instanz suchen.',
  'Was ist der Lieblingssnack eines Entwicklers? Cookies!',
  'Warum sind Programmierer schlechte Gärtner? Sie lassen alles verwelken, was nicht in Arrays wächst.',
  'Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln? Keinen, das ist ein Hardware-Problem!',
  'Warum sind Entwickler so schlecht im Smalltalk? Sie bevorzugen nur relevante Daten.',
  'Was sagt ein Entwickler, wenn er Hunger hat? Ich brauche mehr Bytes!',
  'Warum sind Bugs wie Schmetterlinge? Sie tauchen immer dann auf, wenn man sie am wenigsten erwartet.',
  'Was ist das Lieblingsgetränk eines Entwicklers? Java!',
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Joke API läuft auf http://localhost:${PORT}/api/jokes`);
});
