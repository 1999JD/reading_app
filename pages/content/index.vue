<template>
  <div>
    <ContentBookSubEntry class="mb-10 bg-primary" />
    <div
      class="
        flex
        justify-end
        items-center
        fixed
        z-40
        top-31
        w-full
        pt-6
        pb-2
        pr-7
        bg-white
      "
    >
      <div class="w-3.5">
        <img src="~/assets/icon/content/two-way-arrow.svg" alt="" />
      </div>
      <p>依下載量排序</p>
    </div>
    <ul class="px-6 mt-30">
      <ContentBookListItem v-for="book in books" :key="book.id" :book="book" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Content',
  layout: 'index',
  data() {
    return {
      books: [
        {
          id: 0,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 1000,
        },
        {
          id: 1,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 32,
        },
        {
          id: 2,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 3,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 4,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 5,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 6,
          title: '素養人才',
          src: 'sampleBook.jpg',
          author: '吳清基',
          publisher: '台灣知識庫股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 7,
          title: '素養人才',
          src: 'sampleBook.jpg',
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
