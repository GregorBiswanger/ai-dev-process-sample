// app.js
const express = require('express');
const jokesRoute = require('./jokesRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(jokesRoute);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
