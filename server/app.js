const express = require('express')
const app = express()
// const request = require('request')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// const API_URL =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:7777'
//     : 'http://localhost:7777'
// const url = 'https://gw.openapi.org.tw/18463fd0-8aa7-11ea-8b2f-dfcba39a3448/6ace07502582?client_id=b8ccb0e0-e92b-11eb-bcd3-2fe59eaf628f&client_secret=qsaXzDKnFpJ9RBuFCIankP8eZsvicdIfgNpsKVLRLks%3D&skip=10&limit=25'
app.get('/', (req, res) => {
  // request(url, function (error, response, body) {
  //   console.error('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // })
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