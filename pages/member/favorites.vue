<template>
  <main class="mt-8 mx-6">
    <ul>
      <MemberFaveItem
        v-for="(faveItem, index) in favorites"
        :key="faveItem.id"
        :fave-item="faveItem"
        :index="index"
        :arr-length="favorites.length"
      />
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Favorites',
  layout: 'member',
  data() {
    return {
      favorites: [
        {
          bookId: 1,
          imgSrc: 'sampleBook.jpg',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 2,
          imgSrc: 'sampleBook.jpg',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 3,
          imgSrc: 'sampleBook.jpg',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 4,
          imgSrc: 'sampleBook.jpg',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 5,
          imgSrc: 'sampleBook.jpg',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本',
          author: '一路',
          publishTime: '2021-06-30',
        },
      ],
    }
  },
}
</script>
