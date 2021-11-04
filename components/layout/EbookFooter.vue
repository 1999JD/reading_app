<template>
  <footer
    class="
      ebookfooter
      flex
      justify-between
      fixed
      bottom-0
      z-20
      w-full
      px-10
      py-3
      bg-white
      shadow-sm
      filter
      drop-shadow-md
    "
  >
    <LayoutFooterIcons
      v-for="button in footerButtons"
      :key="button.title"
      :src="button.src"
      :alt="button.alt"
      :to="button.to"
      >{{ button.title }}
    </LayoutFooterIcons>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerButtons: [
        { title: '目錄', src: 'catalog', alt: '目錄', to: '/content' },
        { title: '筆記', src: 'pen-line', alt: '筆記', to: '/' },
        { title: '收藏', src: 'store-tag', alt: '收藏', to: '/member' },
        { title: '設定', src: 'man', alt: '設定', to: '/member' },
      ],
    }
  },
}
</script>

<style scoped>
.ebookfooter {
  box-shadow: 0 -1px 2px rgba(174, 174, 174, 0.25);
}
</style>
