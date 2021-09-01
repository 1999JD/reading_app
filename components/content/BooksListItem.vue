<template>
  <li class="bg-primary">
    <div class="card__img">
      <img :src="book.src" :alt="book.alt" />
    </div>
    <div>
      <h3>{{ book.title }}</h3>
      <ul>
        <li>作者: {{ book.author }}</li>
        <li>出版社: {{ book.publisher }}</li>
        <li>出版日期: {{ book.publicationDate }}</li>
      </ul>
      <span>下載量 {{ book.download }}</span>
    </div>
    <button type="button">audio</button>
  </li>
</template>

<script>
export default {
  name: 'BooksListItem',
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
          src: './',
          alt: 'book',
        }
      },
    },
  },
}
</script>
