<template>
  <nav class="box-border flex justify-evenly pt-3 py-6 px-6 bg-primary">
    <NuxtLink v-for="link in links" :key="link.title" :to="link.to">
      <div
        class="
          flex
          justify-center
          items-center
          w-12.5
          mb-2
          p-1.25
          bg-white
          rounded-lg
          shadow-sm
        "
      >
        <img
          :src="require(`~/assets/icon/index/${link.src}`)"
          :alt="link.alt"
          class="max-w-full h-auto"
        />
      </div>
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          title: '素養說書',
          to: '/content',
          src: 'reading-ebook.png',
          alt: '',
        },
        { title: '線下活動', to: '/', src: 'location-mark.png', alt: '' },
        { title: 'TKB書城', to: '/', src: 'notebook.png', alt: '' },
        { title: '我要測驗', to: '/test', src: 'testing.png', alt: '' },
        { title: '每日簽到', to: '/', src: 'daily-check-in.png', alt: '' },
      ],
    }
  },
}
</script>
