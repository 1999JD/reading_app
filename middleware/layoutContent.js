

export default async function ({ app, store, route, params }) {
  let heading
  const routeName = route.name
  switch (routeName) {
    case 'content-media-id':
      heading = '現正播放'
      break
    case 'content-paperbook-id':
      heading = '書籍簡介'
      break
    case 'content-ebook-id':
      heading = '書籍簡介'
      break
    case 'content-test-id':
      heading = '測驗挑戰'
      break
    case 'member-cart':
      heading = '購物清單'
      break
    case 'member-collections':
      heading = '我的收藏'
      break
    case 'member-orderPlan':
      heading = '訂購專區'
      break
    case 'member-orderReceipt':
      heading = '訂購專區'
      break
    case 'member-checkout':
      heading = '付款資訊'
      break
    case 'member-records':
      heading = '購買紀錄'
      break
  }
  store.commit('setHeading', heading)

  let backRoute = '/content'
  store.commit('setBackRoute', backRoute)
  await app.router.beforeEach((to, from, next) => {
    if (from.path.includes('/content/media'))
      backRoute = `/content/media/${params.id}`
    else
      backRoute = from.path
    return next(store.commit('setBackRoute', backRoute))
  })
}