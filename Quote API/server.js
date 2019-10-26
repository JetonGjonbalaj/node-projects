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
  const { person } = req.query;
  
  if (person)
    return res.send({
      quotes: quotes.filter(quote => quote.person == req.query.person)
    })

  return res.send({quotes});
})

app.post('/api/quotes/', (req, res) => {
  const {quote, person} = req.query;
  const newQuote = {
    quote,
    person
  }

  if (quote && person) {
    quotes.push(newQuote);
    return res.send({quote: newQuote});
  }

  return res.status(400).send();
})

app.listen(PORT, () => console.log(`Server listening to port: ${PORT}`))