<template>
  <button
    :class="[
      arrowLeft ? 'left-6' : 'right-6',
      'flex items-center justify-center fixed  top-0  bottom-0 m-auto transform -translate-y-5 w-12 h-14 bg-primary opacity-70',
    ]"
  >
    <img
      :src="
        require(`~/assets/icon/common/${arrowLeft ? 'leftArrow' : 'rightArrow'}.svg`)
      "
      :alt="arrowLeft ? '上一頁' : '下一頁'"
    />
  </button>
</template>

<script>
export default {
  name: 'EbokArrowButton',
  props: {
    arrowLeft: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
