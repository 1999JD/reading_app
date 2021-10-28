<template>
  <NuxtLink :to="to" class="block text-center">
    <div class="w-16">
      <img :src="`~/assets/icon/member/${src}.svg`" />
      <!-- <img :src="require(`~/assets/icon/layout/home.svg`)" /> -->
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
