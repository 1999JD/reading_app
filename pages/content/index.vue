<template>
  <div>
    <div class="box-border fixed z-10 top-13 w-full">
      <CommonBookSubEntry class="bg-primary" />
      <div class="flex justify-end items-center pt-6 pb-2 pr-7 bg-white">
        <div class="w-3.5">
          <img src="~/assets/icon/content/two-way-arrow.svg" alt="" />
        </div>
        <p>依下載量排序</p>
      </div>
    </div>
    <div class="h-18"></div>
    <div class="h-12"></div>
    <ul class="px-6">
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
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 1000,
        },
        {
          id: 1,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 32,
        },
        {
          id: 2,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 3,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 4,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 5,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 6,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
        {
          id: 7,
          title: '園子習慣',
          src: 'sampleBook.jpg',
          author: '詹姆斯',
          publisher: '範例股份有限公司',
          publicationDate: '2020-10-11',
          download: 352,
        },
      ],
    }
  },
}
</script>
