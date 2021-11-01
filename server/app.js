// const bodyParser = require('body-parser')
const app = require('express')()
// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    path: req.url
  })
})

app.get('/auth/login', (req, res) => {
  if (req.body.userInfo) {
    res.json({
      token: 'token'
    })
  }
})


module.exports = app