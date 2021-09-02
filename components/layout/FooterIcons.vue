<template>
  <NuxtLink :to="to" class="leading-4">
    <img :src="require(`~/assets/icon/${src}.svg`)" class="mb-2" />
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'FooterIcons',
  props: {
    to: { type: String, default: '' },
    src: { type: String, default: '' },
    alt: { type: String, default: 'icon' },
  },
}
</script>
