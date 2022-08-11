// import https from 'https'
import apiFunction from '~/api/index'

export default ({ $axios, redirect }, inject) => {
  // $axios.defaults.httpsAgent = new https.Agent({
  //   rejectUnauthorized:
  //     false
  // })
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code !== 200) {
      redirect('/')
    }
  })

  const api = apiFunction($axios)
  inject('api', api)
}
