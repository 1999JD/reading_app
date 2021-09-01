<template>
  <div>
    <h2>熱門排行</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="card-img">
          <img :src="require(`~/assets/img/${book.src}.svg`)" class="w-full h-auto" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hit',
  data() {
    return {
      books: [
        {
          id: 1,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          viewdNum: 888,
          src: 'book',
          alt: '素養人才',
        },
        {
          id: 2,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          viewdNum: 888,
          src: 'book',
          alt: '素養人才',
        },
        {
          id: 3,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          viewdNum: 888,
          src: 'book',
          alt: '素養人才',
        },
        {
          id: 4,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          viewdNum: 888,
          src: 'book',
          alt: '素養人才',
        },
        {
          id: 5,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          viewdNum: 888,
          src: 'book',
          alt: '素養人才',
        },
      ],
    }
  },
}
</script>
