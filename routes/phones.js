var express = require('express')
var app = express()
var moment = require('moment')
const JSONdb = require('simple-json-db')
const db = new JSONdb('./database/database.json')

app.get('/phones', (req, res) => {
  res.json({isError:false, data:db.JSON()})
})

app.get('/phones/set', (req, res) => {
  db.set('phones', [
    {
      id: 'phone-1',
      name: 'iPhone 7',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'IPhone_7.png',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-2',
      name: 'iPhone 8',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'IPhone_7.png',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-3',
      name: 'iPhone X',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'IPhone_7.png',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
  ])

 
  res.json({ isError: false, message: 'catalouge set' })
})



module.exports = app
