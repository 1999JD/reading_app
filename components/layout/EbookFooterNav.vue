<template>
  <footer
    class="
      flex
      justify-between
      mt-auto
      px-10
      py-2
      bg-white
      filter
shadow-lg
    "
  >
    <button
      v-for="button in footerButtons"
      :key="button.title"
      class="block leading-4"
      @click="$emit(button.handler)"
    >
      <img
        :src="require(`~/assets/icon/layout/${button.src}`)"
        :alt="button.alt"
        class="mb-2"
      />
      {{ button.title }}
    </button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerButtons: [
        {
          title: '目錄',
          src: 'catalog.svg',
          alt: '目錄',
          handler: 'onClickCatalog',
        },
        {
          title: '筆記',
          src: 'pen-line.svg',
          alt: '筆記',
          handler: 'onClickPen',
        },
        { title: '收藏', src: 'store-tag.svg', alt: '收藏', handler: '' },
        {
          title: '設定',
          src: 'settings.svg',
          alt: '設定',
          handler: 'onClickSetting',
        },
      ],
    }
  },
}
</script>
