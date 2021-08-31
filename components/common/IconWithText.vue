<template>
  <button>
    <img :src="iconData.src" :alt="iconData.alt" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'IconWithText',
  props: {
    iconData: {
      type: Object,
      default() {
        return {
          src: '~',
          alt: 'icon',
        }
      },
    },
  },
}
</script>
