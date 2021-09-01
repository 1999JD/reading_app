<template>
  <div>
    <CommonSubEntries class="bg-primary" />
    <ul>
      <ContentBooksListItem v-for="book in books" :key="book.id" :book="book" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      books: [
        {
          id: 0,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 1,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 2,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 3,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 4,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 5,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 6,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 7,
          title: '素養人才',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
      ],
    }
  },
}
</script>
