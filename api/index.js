export default (axios) => ({
  // fake api as example
  apiFake() {
    return axios.get('/')
  },
  apiUser: {
    url: '/auth/user',
    method: 'get',
    propertyName: ''
  },

  apiLogin() {
    return {
      url: '/auth/login',
      method: 'post'
    }
  },
  apiLogout: {
    url: '/auth/logout',
    method: 'post'
  },
})

