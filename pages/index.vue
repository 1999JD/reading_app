<template>
  <main>
    <div class="px-6 py-3 bg-primary">
      <div class="banner">
        <img src="https://fakeimg.pl/366x100/ff0000/" />
      </div>
    </div>
    <IndexNav />
    <div class="flex justify-around py-3">
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
  loading: true,
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
          bookId: 0,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 1000,
        },
        {
          bookId: 1,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 32,
        },
        {
          bookId: 2,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
        {
          bookId: 3,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
        {
          bookId: 4,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
        {
          bookId: 5,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
        {
          bookId: 6,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
        {
          bookId: 7,
          name: '素養人才',
          imgSrc: 'sampleBook.jpg',
          desc: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publishTime: '2020-10-11',
          download: 352,
        },
      ],
    }
  },
  watchQuery(newQuery, oldQuery) {
    // 偵測到 newQuery 就發新的 api ?
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

<style lang="postcss" scoped>
.active::after {
  content: '';
  @apply absolute w-8 h-1 -bottom-1.5 left-0 bg-gray-500 rounded-xl;
}
</style>
