<template>
  <nav class="flex">
    <button
      v-for="nav in navs"
      :key="nav.text"
      class="flex-grow py-2"
      :style="{ backgroundColor: nav.bgColor }"
    >
      <img :src="require(`~/assets/icon/content/${nav.icon}.svg`)" class="m-auto" />
      <span>{{ nav.text }}</span>
    </button>
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
        },
        {
          bgColor: '#F8F8FB',
          icon: 'realbook',
          text: '實體書',
        },
        {
          bgColor: '#FFD784',
          icon: 'test',
          text: '我要測驗',
        },
      ],
    }
  },
}
</script>
