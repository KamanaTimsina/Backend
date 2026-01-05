require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Hello login page!')
})

app.get('/signup', (req, res) => {
  res.send('Hello signup page!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


