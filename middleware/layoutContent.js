

export default function ({ app, store, route, redirect }) {
  if (!store.state.auth.loggedIn && route.name.includes('member')) {
    redirect('/account/login')
  }
  let heading
  const routeName = route.name
  if (routeName === 'account-login') {
    if (store.state.auth.loggedIn) {
      redirect('/')
    }
  }
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
    case 'content-ebook-reading-id':
      heading = '現正閱讀'
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
    case 'account-login':
      heading = '會員登入'
      break
    case 'account-register':
      heading = '歡迎註冊 !'
      break
    case 'account-resetPassword':
      heading = '我要修改密碼'
      break
    case 'account-forgetPassword':
      heading = '忘記密碼'
      break
  }

  store.commit('setHeading', heading)

  console.log(heading, routeName)
  let backRoute = '/member'
  app.router.beforeEach((to, from, next) => {
    if (to.path === '/member/cart' && from.path !== '/member/checkout') {
      backRoute = from.path
      store.commit('setBackRoute', backRoute)
      next()
    }
    else next()
  })
  store.commit('setBackRoute', backRoute)
}