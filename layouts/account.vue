<template>
  <div>
    <div class="box-border h-82 bg-primary"></div>
    <div class="relative -top-33 px-6">
      <h2 class="mb-3 text-2xl">
        {{ $store.state.authPageHeading }}
      </h2>
      <main class="rounded-2lg pt-10 pb-21.5 px-8 shadow-account-main bg-white">
        <nuxt />
      </main>
    </div>
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'Auth',
  middleware({ store, route }) {
    console.log('route' + route.path)
    let heading
    const routeName = route.name
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
      case 'account-forgotPassword':
        heading = '忘記密碼'
        break
    }
    store.commit('SetAuthPageHeading', heading)
  },
}
</script>
