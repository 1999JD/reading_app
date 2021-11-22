<template>
  <NuxtLink :to="to" class="flex flex-col items-center">
    <div class="w-9 h-9 mb-4">
      <img :src="require(`~/assets/icon/member/${src}`)" />
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
