<template>
  <ul class="m-6">
    <li
      v-for="book in books"
      :key="book.bookId"
      class="flex gap-3 mb-3"
      @click="$router.push(`/content/media/${book.bookId}`)"
    >
      <div class="w-24 flex-shrink-0">
        <img
          :src="require(`~/assets/img/${book.imgSrc}`)"
          class="max-w-full h-auto rounded"
        />
      </div>
      <div
        :class="[
          book.bookId === books.length - 1
            ? ''
            : 'border-solid border-b-2 border-gray-divide',
        ]"
      >
        <h3 class="mb-1 text- font-medium">{{ book.name }}</h3>
        <p class="mb-2 line-clamp-3">{{ book.desc }}</p>
        <div class="text-gray-subInfo text-xs">
          <p class="mb-2">{{ book.author }}</p>
          <p class="mb-3">{{ book.publishTime }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CateRecommend',
  props: {
    books: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
