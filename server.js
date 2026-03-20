const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const jokes = [
  { id: 1, setup: 'Why do programmers prefer dark mode?', punchline: 'Because light attracts bugs!' },
  { id: 2, setup: 'How many programmers does it take to change a light bulb?', punchline: 'None – that\'s a hardware problem.' },
  { id: 3, setup: 'Why do Java developers wear glasses?', punchline: 'Because they don\'t C#.' },
  { id: 4, setup: 'A SQL query walks into a bar, walks up to two tables and asks...', punchline: '"Can I join you?"' },
  { id: 5, setup: 'Why was the JavaScript developer sad?', punchline: 'Because he didn\'t Node how to Express himself.' },
  { id: 6, setup: 'What\'s a computer\'s favorite snack?', punchline: 'Microchips!' },
  { id: 7, setup: 'Why did the developer go broke?', punchline: 'Because he used up all his cache.' },
  { id: 8, setup: 'What do you call a programmer from Finland?', punchline: 'Nerdic.' },
  { id: 9, setup: 'Why do programmers always mix up Halloween and Christmas?', punchline: 'Because Oct 31 == Dec 25.' },
  { id: 10, setup: 'There are only 10 types of people in the world.', punchline: 'Those who understand binary and those who don\'t.' },
];

app.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

app.listen(PORT, () => {
  console.log(`Joke API running on http://localhost:${PORT}`);
});
