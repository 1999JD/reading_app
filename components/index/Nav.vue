<template>
  <nav class="flex justify-evenly pt-3 py-6 px-6 bg-primary">
    <IndexNavIcons
      v-for="nav in navs"
      :key="nav.title"
      :src="nav.src"
      :alt="nav.alt"
      :to="nav.to"
    >
      {{ nav.title }}
    </IndexNavIcons>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navs: [
        { title: '素養說書', to: '/content', src: '~', alt: '' },
        { title: '線下活動', to: '/', src: '~', alt: '' },
        { title: 'TKB書城', to: '/', src: '~', alt: '' },
        { title: '我要測驗', to: '/test', src: '~', alt: '' },
        { title: '每日簽到', to: '/', src: '~', alt: '' },
      ],
    }
  },
}
</script>
