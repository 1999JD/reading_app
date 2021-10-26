<template>
  <main>
    <ul>
      <MemberFaveItem
        v-for="faveItem in favorites"
        :key="faveItem.id"
        :fave-item="faveItem"
      />
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Favorites',
  data() {
    return {
      favorites: [
        {
          bookId: 1,
          imgSrc: '',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 2,
          imgSrc: '',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 3,
          imgSrc: '',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publishTime: '2021-06-30',
        },
        {
          bookId: 4,
          imgSrc: '',
          imgAlt: '',
          name: '素養人才',
          desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publishTime: '2021-06-30',
        },
      ],
    }
  },
}
</script>
