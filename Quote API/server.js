const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, hasParameters } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random/', (req, res) => {
  const quote = getRandomElement(quotes);
  res.send({quote});
});

app.get('/api/quotes/', (req, res) => {
  if (hasParameters(req.query)) {

  }
  return res.status(200).send();
})

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`)
})