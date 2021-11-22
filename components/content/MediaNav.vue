<template>
  <nav class="flex">
    <NuxtLink
      v-for="nav in navs"
      :key="nav.text"
      class="flex-grow py-2 text-center"
      :to="`${nav.to}${$route.params.id}`"
      :style="{ backgroundColor: nav.bgColor }"
    >
      <div class="w-6 m-auto mb-1">
        <img
          :src="require(`~/assets/icon/content/${nav.icon}.svg`)"
          class="m-auto"
        />
      </div>
      <span>{{ nav.text }}</span>
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'ContentNav',
  data() {
    return {
      navs: [
        {
          bgColor: '#A9E2E3',
          icon: 'ebook',
          text: '電子書',
          to: '/content/ebook/',
        },
        {
          bgColor: '#F8F8FB',
          icon: 'realbook',
          text: '實體書',
          to: '/content/paperbook/',
        },
        {
          bgColor: '#FFD784',
          icon: 'test',
          text: '我要測驗',
          to: '/content/test/',
        },
      ],
    }
  },
}
</script>
