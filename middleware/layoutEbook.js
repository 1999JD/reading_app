

export default async function ({ app, store }) {
  await app.router.beforeEach((_to, from, next) => {
    let backRoute = '/content'
    if (from.path.includes('/ebook') || from.path.includes('/paperbook')) {
      backRoute = from.path
      return next(store.commit('setBackRoute', backRoute))
    }
    return next(store.commit('setBackRoute', backRoute))
  })
}