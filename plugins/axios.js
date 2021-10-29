import apiFunction from '~/api/index'

export default ({ $axios, redirect }, inject) => {
  $axios.onRequest(config => {
    console.log('axios plugin')
    return config
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code !== 200) {
      redirect('/member')
    }
  })

  const api = apiFunction($axios)
  inject('api', api)

}
