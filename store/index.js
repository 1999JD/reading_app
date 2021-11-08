export const state = () => ({
  authPageHeading: 'default',
  contentPageHeading: 'default'
})

export const mutations = {
  SetAuthPageHeading(state, heading) {
    state.authPageHeading = heading
  },
  SetContentPageHeading(state, heading) {
    state.contentPageHeading = heading
  }
}