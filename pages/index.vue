<template>
  <main>
    <div class="px-6 py-3 bg-primary">
      <img
        src=""
        alt="banner"
        class="max-w-full h-auto border"
        width="366"
        height="100"
      />
    </div>
    <ul class="flex justify-evenly pt-3 py-6 px-6 bg-primary">
      <li v-for="nav in navs" :key="nav.title">
        <IndexIconWithText :src="nav.src" :alt="nav.alt" :to="nav.to">
          {{ nav.title }}
        </IndexIconWithText>
      </li>
    </ul>
    <div class="flex justify-around bg-gray-mainentries shadow-md">
      <a
        v-for="entry in mainEntries"
        :key="entry.title"
        href="#"
        class="py-3"
        @click.prevent="show = `Index${entry.name}`"
      >
        {{ entry.title }}
      </a>
    </div>
    <CommonSubEntries />
    <component :is="show" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { title: '素養說書', to: '/content/', src: '~', alt: '' },
        { title: '線下活動', to: './', src: '~', alt: '' },
        { title: 'TKB書城', to: './', src: '~', alt: '' },
        { title: '我要測驗', to: './', src: '~', alt: '' },
        { title: '每日簽到', to: './', src: '~', alt: '' },
      ],
      mainEntries: [
        { title: '最新', name: 'Latest' },
        { title: '熱門', name: 'Hit' },
        { title: '推薦', name: 'Recommend' },
        { title: '精選', name: 'Featured' },
      ],

      show: 'IndexLatest',
    }
  },
}
</script>
