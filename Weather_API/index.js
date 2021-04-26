const express = require('express')
const app = express()
const port = 3000

app.post('/signin', function(req, res, next) {
  const username = req.query.username
  res.send({username})
})

app.get('/weathers', function(req, res, next) {
  const weathers = [
    {
      id: '1',
      name: 'New York',
      type: 'Sunny',
      temperature: '8',
      wind: '20 mph',
      humidity: '63%',
      precipitation: '1%',
    },
    {
      id: '2',
      name: 'Toronto',
      type: 'Cloudy',
      temperature: '2',
      wind: '60 mph',
      humidity: '83%',
      precipitation: '1%',
    },
    {
      id: '3',
      name: 'Austin',
      type: 'Rain',
      temperature: '4',
      wind: '90 mph',
      humidity: '93%',
      precipitation: '1%',
    },
  ];
  res.send(weathers)
})

app.listen(port, () => {
  console.log('Weather API listening at http://localhost:3000')
})
