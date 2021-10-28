<template>
  <footer
    class="
      flex
      justify-between
      fixed
      bottom-0
      z-10
      w-full
      px-10
      py-2
      bg-white
      filter
      drop-shadow-footer
    "
  >
    <NuxtLink
      v-for="button in footerButtons"
      :key="button.title"
      :to="button.to"
      class="block leading-4"
    >
      <img
        :src="require(`~/assets/icon/layout/${button.src}`)"
        :alt="button.alt"
        class="mb-2"
      />
      {{ button.title }}
    </NuxtLink>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerButtons: [
        { title: '書城', src: 'books.png', alt: '書城', to: '/content' },
        { title: '首頁', src: 'home.svg', alt: '首頁', to: '/' },
        { title: '我的', src: 'account.svg', alt: '會員中心', to: '/member' },
      ],
    }
  },
}
</script>
