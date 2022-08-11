<template>
  <li class="flex relative bg-primary mb-6 p-4 rounded-lg">
    <div class="w-24 mr-2 flex-shrink-0">
      <img :src="require(`~/assets/img/${book.src}`)" :alt="book.alt" />
    </div>
    <div class="flex-grow-1">
      <h3 class="mb-3 font-medium text-base">{{ book.title }}</h3>
      <ul>
        <li class="mb-1">作者: {{ book.author }}</li>
        <li class="mb-1">出版社: {{ book.publisher }}</li>
        <li class="mb-1">出版日期: {{ book.publicationDate }}</li>
      </ul>
      <span class="absolute right-2 bottom-2 text-gray-order"
        >下載量 :{{ book.download }}</span
      >
    </div>
    <NuxtLink
      :to="`/content/media/${book.id}`"
      class="block absolute top-2.5 right-2 w-6"
    >
      <img src="~/assets/icon/content/earphone.png" alt="" />
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'BookListItem',
  props: {
    book: {
      type: Object,
      default() {
        return {
          id: 0,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
          src: '~/assets/img/sampleBook.jpg',
          alt: 'book',
        }
      },
    },
  },
}
</script>
