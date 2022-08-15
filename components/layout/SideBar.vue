<template>
  <nav class="fixed z-20 w-80 top-13 bg-white filter drop-shadow">
    <h2>訂購專區</h2>

    <NuxtLink v-for="item in orderLinks" :key="item.title" :to="item.to">
      {{ item.title }}
    </NuxtLink>

    <h2>會員專區</h2>
    <NuxtLink v-for="item in memberLinks" :key="item.title" :to="item.to">
      {{ item.title }}
    </NuxtLink>

    <a
      v-if="$store.state.auth.loggedIn"
      href="javascript:void(0)"
      @click="handleLogout"
      >登出</a
    >
    <a v-else href="javascript:void(0)" @click="handleLogin">登入</a>
  </nav>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      orderLinks: [
        { title: '熱門商品', to: '/member/hit' },
        { title: '訂閱方案', to: '/member/orderPlan' },
        { title: '團購方案', to: '/member/groupBuy' },
        { title: '周邊商品', to: '/member/merch' },
      ],
      memberLinks: [
        { title: '購買紀錄', to: '/member/records' },
        { title: '里程碑', to: '/member/milestone' },
        { title: '我的收藏', to: '/member/collections' },
        { title: '優惠卷', to: '/member/coupon' },
      ],
    }
  },
  methods: {
    handleLogin() {
      this.$router.push('/account/login')
    },
    handleLogout() {
      this.$store.dispatch('handleLogin', false)
    },
  },
}
</script>

<style lang="postcss" scoped>
nav {
  height: calc(100vh - 52px);
}

h2 {
  @apply py-2 bg-primary text-center;
}

a,
button {
  @apply block py-3 px-9 leading-4;
}
</style>
