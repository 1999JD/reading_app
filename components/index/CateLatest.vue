<template>
  <div class="card-group">
    <h2>{{ books.week.cate }}</h2>
    <ul class="flex overflow-x-scroll">
      <li v-for="book in books.week.items" :key="book.id">
        <div class="card__img mr-4 overflow-hidden rounded">
          <img
            :src="require(`~/assets/img/${book.src}.svg`)"
            class="w-full h-auto"
          />
        </div>
        <h3>{{ book.title }}</h3>
        <p>{{ book.intro }}</p>
      </li>
    </ul>
    <h2>{{ books.recent.cate }}</h2>
    <ul class="flex overflow-x-scroll">
      <li v-for="book in books.recent.items" :key="book.id">
        <div class="card__img mr-4 overflow-hidden rounded">
          <img
            :src="require(`~/assets/img/${book.src}.svg`)"
            class="w-full h-auto"
          />
        </div>
        <h3>{{ book.title }}</h3>
        <p>{{ book.intro }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CateLatest',
  data() {
    return {
      books: {
        week: {
          cate: '本周',
          items: [
            {
              id: 1,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 2,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 3,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 4,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
          ],
        },
        recent: {
          cate: '近期',
          items: [
            {
              id: 5,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 6,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 7,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
            {
              id: 8,
              title: '素養人才',
              src: 'book',
              alt: '素養人才',
              intro: '我是內容我是內容我是內容我是......',
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.card-group {
  margin-bottom: 4.5rem;
}
.card__img {
  width: 7rem;
  height: 7.875rem;
}
</style>
