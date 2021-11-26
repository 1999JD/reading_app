export default function ({ app, store, route, redirect }) {
  if (!store.state.auth.loggedIn) {
    if (typeof window !== 'undefined') {
      alert('您尚未登入')
    }
    redirect('/account/login')
  }
  let backRoute = '/member'
  let heading
  const routeName = route.name
  switch (routeName) {
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
      backRoute = '/member/orderPlan'
      break
    case 'member-checkout':
      heading = '付款資訊'
      backRoute = '/member/cart'
      break
    case 'member-records':
      heading = '購買紀錄'
  }
  app.router.beforeEach((to, from, next) => {
    if (to.path === '/member/cart' && from.path !== '/member/checkout') {
      backRoute = from.path
      store.commit('setBackRoute', backRoute)
      next()
    }
    else next()
  })
  store.commit('setHeading', heading)
  store.commit('setBackRoute', backRoute)
}