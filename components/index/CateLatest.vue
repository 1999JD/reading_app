<template>
  <main class="mt-9 mb-13">
    <section v-for="subCate in books" :key="subCate.cate">
      <h2 class="title">{{ subCate.cate }}</h2>
      <ul
        class="
          flex
          gap-4
          mb-10
          px-6
          overflow-x-auto overflow-y-hidden
          no-scrollbar
        "
      >
        <li
          v-for="book in subCate.books"
          :key="book.bookId"
          class=""
          @click="$router.push(`/content/media/${book.bookId}`)"
        >
          <div class="card__img mb-2 rounded">
            <img
              :src="require(`~/assets/img/${book.src}`)"
              class="w-full h-auto"
            />
          </div>
          <h3 class="mb-2 text-center text-base">{{ book.title }}</h3>
          <p class="line-clamp-3">{{ book.intro }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CateLatest',
  data() {
    return {
      books: [
        {
          title: 'week',
          cate: '本周',
          books: [
            {
              bookId: 1,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 2,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 3,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 4,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro:
                '我是內容我是內容我是內容我是內容我是內容我是內容是內容是內容',
            },
          ],
        },
        {
          title: 'latest',
          cate: '近期',
          books: [
            {
              bookId: 5,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 6,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 7,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
            {
              bookId: 8,
              title: '原子習慣',
              src: 'sampleBook.jpg',
              alt: '原子習慣',
              intro: '我是內容我是內容我是內容我是內容我是內容我是內容',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.title {
  background-image: url('~/assets/img/tag-title.png');
  @apply w-20 mb-4 font-medium leading-8 text-center;
}

.card__img {
  width: 112px;
}
</style>
