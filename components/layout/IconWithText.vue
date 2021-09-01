<template>
  <button class="leading-4">
    <img :src="require(`~/assets/icon/${src}.svg`)" class="mb-2" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'IconWithText',
  props: {
    src: { type: String, default: '' },
    alt: { type: String, default: 'icon' },
  },
}
</script>
