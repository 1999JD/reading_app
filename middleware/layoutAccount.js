export default function ({ store, route, redirect }) {
  let heading
  const routeName = route.name
  if (routeName === 'account-login') {
    if (store.state.auth.loggedIn) {
      if (typeof window !== 'undefined') {
        alert('您已經登入!')
      }
      redirect('/')
    }
  }

  switch (routeName) {
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
}