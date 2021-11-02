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
  if (req.body.userInfo) {
    res.json({
      token: 'token'
    })
  }
})

app.get('/auth/user', (_req, res) => {
  res.json({
    data: {
      name: 'Joyce',
      age: 22,
    }
  })
})

app.post('/logout', (_req, res) => {
  res.json({ status: 'OK' })
})


module.exports = app