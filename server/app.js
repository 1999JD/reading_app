const express = require('express')
const app = express()
// const request = require('request')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// const API_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:7777'
//     : 'http://localhost:7777'
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
    // await request.post(
    //   {
    //     url: `${API_URL}/auth/login`,
    //     json: req.body,
    //   },
    //   function (error, response, body) {
    //     console.error('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    //   }
    // )

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