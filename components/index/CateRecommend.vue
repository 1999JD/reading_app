<template>
  <ul class="m-6">
    <li v-for="book in books" :key="book.id" class="flex gap-3 mb-3">
      <div class="w-24 flex-shrink-0">
        <img
          :src="require(`~/assets/img/${book.src}`)"
          :alt="book.alt"
          class="max-w-full h-auto rounded"
        />
      </div>
      <div
        :class="[
          book.id === books.length - 1
            ? ''
            : 'border-solid border-b-2 border-gray-divide',
        ]"
      >
        <h3 class="mb-1 text- font-medium">{{ book.title }}</h3>
        <p class="mb-2">{{ book.intro }}</p>
        <div class="text-gray-subInfo text-xs">
          <p class="mb-2">{{ book.author }}</p>
          <p class="mb-3">{{ book.publicationDate }}</p>
        </div>
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
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 1,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 2,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 3,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 4,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 5,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 6,
          title: '素養人才',
          src: 'sampleBook.jpg',
          alt: 'book',
          intro:
            '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容',
          author: '一路',
          publicationDate: '2021-06-30',
        },
        {
          id: 7,
          title: '素養人才',
          src: 'sampleBook.jpg',
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
