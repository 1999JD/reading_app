<template>
  <NuxtLink :to="to" class="block text-center">
    <div class="w-16 h-16">
      <img :src="require(`~/assets/icon/${src}.svg`)" />
    </div>
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'MemberIcons',
  props: {
    to: { type: String, default: '' },
    src: { type: String, default: '' },
    alt: { type: String, default: 'icon' },
  },
}
</script>
