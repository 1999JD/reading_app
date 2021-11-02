// fake api as example
export default (axios) => ({
  apiFake() {
    return axios.get('/')
  }
})

