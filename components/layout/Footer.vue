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
        shadow-sm
        filter
        drop-shadow-md
      "
    >
      <LayoutIconWithText
        v-for="button in footerButtons"
        :key="button.title"
        :src="button.src"
        :alt="button.alt"
        >{{ button.title }}</LayoutIconWithText
      >
    </footer>
</template>

<script>
export default {
  data() {
    return {
      footerButtons: [
        { title: '書城', src: 'books', alt: '書城' },
        { title: '首頁', src: 'home', alt: '首頁' },
        { title: '我的', src: 'man', alt: '我的' },
      ],
    }
  },
}
</script>