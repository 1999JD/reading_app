const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({
    path: req.url
  })
})

app.post('/auth/login', (req, res) => {
  console.log(req.body.userInfo)
  if (req.body.userInfo) {
    res.json({
      token: 'token'
    })
  }
})


module.exports = app