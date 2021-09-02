<template>
  <NuxtLink :to="to">
    <img :src="src" :alt="alt" class="max-w-full h-auto" />
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'IconWithText',
  props: {
    to: { type: String, default: '' },
    src: { type: String, default: '' },
    alt: { type: String, default: 'icon' },
  },
  data() {
    return {
      innerWH: {
        width: 0,
        height: 0,
      },
    }
  },
}
</script>
