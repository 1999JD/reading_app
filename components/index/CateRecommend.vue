<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <div class="card__img">
        <img :src="book.src" :alt="book.alt" class="max-w-full h-auto" />
      </div>
      <h3>{{ book.title }}</h3>
      <p>{{ book.intro }}</p>
      <div>
        <span>{{ book.author }}</span>
        <span>{{ book.publicationDate }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CateRecommend',
  data() {
    return {
      books: [
        {
          id: 0,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 1,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 2,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 3,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 4,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 5,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 6,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 7,
          title: '素養人才',
          src: '',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
      ],
    }
  },
}
</script>
