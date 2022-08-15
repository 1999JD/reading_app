const express = require('express')
const app = express()
// const request = require('request')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({
    path: req.url
  })
})

app.get('/auth/user', (_req, res) => {
  res.json({
    user: {
      name: 'Joyce',
      age: 22,
    }
  })
})


app.post('/auth/login', (req, res) => {
  if (req.body.userInfo) {
    res.json({
      token: {
        accessToken: 'string',
        refreshToken: 'refreshString',
      },
      userInfo: {
        name: 'Joyce',
        age: 22,
      }
    })
  }
})

app.post('/auth/refresh', (req, res) => {
  if (req.body.refreshToken) {
    res.json({
      token: {
        accessToken: 'string',
        refreshToken: 'newRefreshString',
      }
    })
  }
})

app.post('/auth/logout', (_req, res) => {
  res.json({ status: 'OK' })
})


module.exports = app