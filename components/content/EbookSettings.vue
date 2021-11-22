<template>
  <section
    class="fixed bottom-20 left-0 w-full bg-primary rounded-t-lg px-8 py-11"
  >
    <button class="absolute top-3 right-3">
      <span class="sr-only">收合</span>
      <img :src="require('~/assets/icon/common/downArrow.svg')" alt="收合" />
    </button>
    <div class="bg-white mb-2 p-2.5 w-full rounded-2xl">字型大小</div>
    <div class="bg-white mb-2 p-2.5 w-full rounded-2xl">護眼模式</div>
    <div class="bg-white mb-2 p-2.5 w-full rounded-2xl">閱讀方向</div>
    <div class="bg-white mb-2 p-2.5 w-full rounded-2xl">明暗度調整</div>
  </section>
</template>

<script>
export default {
  name: 'EookSettings',
}
</script>
