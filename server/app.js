// const bodyParser = require('body-parser')
const app = require('express')()
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('enter nuxt server')
})


module.exports = app