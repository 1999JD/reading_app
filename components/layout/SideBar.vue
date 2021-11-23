<template>
  <aside class="fixed z-30 w-80 top-13 bg-white filter drop-shadow">
    <h2>訂購專區</h2>
    <ul>
      <li v-for="item in orderLinks" :key="item.title">
        <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
      </li>
    </ul>
    <h2>會員專區</h2>
    <ul>
      <li v-for="item in memberLinks" :key="item.title">
        <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
      </li>
    </ul>
    <button
      class="w-full text-left border-t border-gray-divide"
      @click="handleUserLog"
    >
      {{ $auth.loggedIn ? '登出' : '登入' }}
    </button>
    <button @click="handleRefreshToken">手動刷新</button>
  </aside>
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
    async handleUserLog() {
      if (this.$auth.loggedIn) {
        await this.$auth.logout()
        this.$emit('onClick')
        this.$router.push('/')
      } else {
        this.$router.push('/account/login')
      }
    },
    handleRefreshToken() {
      this.$auth.refreshTokens()
    },
  },
}
</script>

<style scoped>
aside {
  height: calc(100vh - 3.25rem);
}

h2 {
  @apply py-2 bg-primary text-center;
}

ul {
  @apply divide-y divide-gray-divide divide-solid;
}

a,
button {
  @apply block py-3 px-9 leading-4;
}
</style>
