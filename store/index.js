export const state = () => ({
  authPageHeading: 'default'
})

export const mutations = {
  SetAuthPageHeading(state, heading) {
    state.authPageHeading = heading
  }
}