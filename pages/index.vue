<template>
  <main>
    <div class="px-6 py-3 bg-primary">
      <img
        src="~/assets/img/banner.jpg"
        alt="banner"
        class="max-w-full h-auto border"
        width="366"
        height="100"
      />
    </div>
    <IndexNav />
    <div class="flex justify-around py-3 bg-gray-mainentries shadow-entries">
      <a
        v-for="entry in mainEntries"
        :key="entry.title"
        href="#"
        :class="[entry.active && 'active', 'block relative w-8 text-center']"
        @click.prevent="switchMainEntry(entry.name)"
      >
        {{ entry.title }}
      </a>
    </div>
    <CommonBookSubEntry />
    <component :is="show" :books="books" />
  </main>
</template>
<script>
export default {
  name: 'Index',
  layout: 'index',
  loading: true,
  async asyncData({ $api }) {
    const pathJson = await $api.apiFake().then((res) => res.data)
    return { pathJson }
  },
  data() {
    return {
      mainEntries: [
        { title: '最新', name: 'Latest', active: true },
        { title: '熱門', name: 'Hit', active: false },
        { title: '推薦', name: 'Recommend', active: false },
        { title: '精選', name: 'Featured', active: false },
      ],
      show: 'IndexCateLatest',
      books: [
        {
          id: 0,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 1000,
        },
        {
          id: 1,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 32,
        },
        {
          id: 2,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 3,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 4,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 5,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 6,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 7,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
      ],
    }
  },
  watchQuery(newQuery, oldQuery) {
    // 偵測到 newQuery 就發新的 api ? 或是更改資料
    return { newQuery, oldQuery }
  },
  methods: {
    switchMainEntry(entryName) {
      this.mainEntries.forEach((element) => {
        if (element.name === entryName) element.active = true
        else element.active = false
      })
      this.show = `IndexCate${entryName}`
    },
  },
}
</script>

<style scoped>
.active::after {
  content: '';
  @apply absolute w-8 h-1 -bottom-1.5 left-0 bg-gray-500 rounded-xl;
}
</style>
