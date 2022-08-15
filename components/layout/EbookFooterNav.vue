<template>
  <footer class="fixed bottom-0 w-full bg-white shadow-md">
    <div class="flex justify-between mx-10 my-2">
      <button
        v-for="button in footerButtons"
        :key="button.title"
        class="flex flex-col justify-center"
        @click="$emit(button.handler)"
      >
        <img
          :src="require(`~/assets/icon/layout/${button.src}`)"
          :alt="button.alt"
          class="mb-2"
        />
        {{ button.title }}
      </button>
    </div>
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
