const express = require('express')
const app = express()

app.get('/', (req, res) => {

  res.send('enter nuxt server')

})

module.exports = {
  path: '/api',
  handler: app,
}