<template>
  <aside class="absolute z-0 w-80 bg-white filter drop-shadow">
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
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      orderLinks: [
        { title: '熱門商品', to: '~/' },
        { title: '訂閱方案', to: '~/' },
        { title: '團購方案', to: '~/' },
        { title: '周邊商品', to: '~/' },
      ],
      memberLinks: [
        { title: '購買紀錄', to: '~/' },
        { title: '里程碑', to: '~/' },
        { title: '我的收藏', to: '~/' },
        { title: '優惠卷', to: '~/' },
        { title: '登出', to: '~/' },
      ],
    }
  },
}
</script>

<style scoped>
aside{
  height: calc(100vh - 3.25rem);
}

h2 {
  @apply py-2 bg-primary text-center;
}

ul {
  @apply divide-y divide-gray-divide divide-solid;
}

a {
  @apply block py-3 px-9 leading-4;
}
</style>
