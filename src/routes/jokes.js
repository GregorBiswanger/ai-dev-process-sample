const express = require('express');
const jokes = require('../jokes');

const router = express.Router();

router.get('/jokes', (req, res) => {
  const random = Math.floor(Math.random() * jokes.length);
  res.json(jokes[random]);
});

module.exports = router;
