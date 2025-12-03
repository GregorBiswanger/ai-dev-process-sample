// jokesRoute.js
const express = require('express');
const router = express.Router();
const jokes = require('./jokes');

router.get('/api/jokes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

module.exports = router;
