<template>
  <div class="fixed bottom-20 left-0 w-full px-6 py-2 bg-white text-center">
    <input
      v-modal="currentPage"
      type="range"
      :max="totalPage"
      min="0"
      step="1"
    />
    <span class="text-primary"> {{ currentPage }} </span
    ><span> /{{ totalPage }} </span>
  </div>
</template>

<script>
export default {
  name: 'EbookRange',
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    totalPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  @apply w-full;
}
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply w-2.5 h-2.5 -mt-1 rounded-full bg-gray-800;
}
input[type='range']::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  @apply h-0.5 bg-gray-800;
}
</style>
