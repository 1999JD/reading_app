<template>
  <main>
    <div class="px-6 pt-3 bg-primary">
      <div class="banner">
        <img src="~/assets/img/banner.jpg" />
      </div>
    </div>
    <nav class="box-border flex justify-evenly py-6 bg-primary">
      <NuxtLink v-for="link in links" :key="link.title" :to="link.to">
        <div class="w-fit p-1 mx-auto mb-2 rounded-lg shadow-md bg-white">
          <div class="w-10">
            <img
              :src="require(`~/assets/icon/index/${link.src}`)"
              :alt="link.alt"
            />
          </div>
        </div>
        {{ link.title }}
      </NuxtLink>
    </nav>
    <div class="flex justify-around py-3 bg-gray-100 shadow-md">
      <button
        v-for="entry in mainEntries"
        :key="entry.title"
        type="button"
        :class="[entry.active && 'active', 'block relative w-8 text-center']"
        @click.prevent="switchMainEntry(entry.name)"
      >
        {{ entry.title }}
      </button>
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
      links: [
        { title: '線下活動', to: '/', src: 'location.jpg', alt: '' },
        { title: 'TKB書城', to: '/', src: 'notebook.jpg', alt: '' },
        { title: '訂閱方案', to: '/test', src: 'subscribe.jpg', alt: '' },
        { title: '每日簽到', to: '/', src: 'check.jpg', alt: '' },
      ],
      mainEntries: [
        { title: '最新', name: 'Latest', active: true },
        { title: '熱門', name: 'Hit', active: false },
        { title: '推薦', name: 'Recommend', active: false },
        { title: '精選', name: 'Featured', active: false },
      ],
      show: 'IndexCateHit',
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
        element.active = element.name === entryName
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
