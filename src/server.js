const express = require('express');
const jokesRouter = require('./routes/jokes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', jokesRouter);

app.listen(PORT, () => {
  console.log(`Joke API läuft auf http://localhost:${PORT}/api/jokes`);
});
