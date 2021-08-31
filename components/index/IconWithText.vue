<template>
  <NuxtLink :to="nav.to">
    <div>
      <img :src="nav.src" :alt="nav.alt" class="max-w-full h-auto" />
    </div>
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'IconWithText',
  props: {
    nav: {
      type: Object,
      default() {
        return {
          src: '~',
          alt: 'icon',
          to: '',
        }
      },
    },
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
