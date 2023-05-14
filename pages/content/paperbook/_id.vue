<template>
  <main class="pb-16 bg-primary">
    <div class="w-35 mx-auto mb-6 rounded-md overflow-hidden">
      <img :src="require(`~/assets/img/${book.imgSrc}`)" alt="" />
    </div>
    <h2 class="mb-5 text-center text-base font-medium">{{ book.name }}</h2>
    <section
      class="relative mx-6 mb-6 p-2.5 pb-3.5 bg-white rounded-md shadow-content"
    >
      <ul class="mb-5 pl-10 text-xs">
        <li class="mb-1">作者: {{ book.author }}</li>
        <li class="mb-1">ISBN: {{ book.ISBN }}</li>
        <li class="mb-1">出版社: {{ book.publisher }}</li>
        <li class="mb-1">出版日期: {{ book.pubDate }}</li>
      </ul>
      <p class="pl-10 text-tangerine text-base font-medium">
        NT${{ book.price }}
      </p>
      <CommonStore
        v-slot="{ note }"
        :book="book"
        class="flex absolute top-3 right-3"
      >
        <span class="block ml-1 whitespace-nowrap">{{ note }}</span>
      </CommonStore>
    </section>

    <nav class="flex justify-between mx-6 pb-4 border-b border-gray-300">
      <button
        class="
          flex
          items-center
          self-center
          w-fit
          px-4
          py-1
          bg-white
          rounded-2xl
          shadow-md
        "
        @click="$router.push(`/content/ebook/reading/${$route.params.id}`)"
      >
        <div class="inline-block w-6 mr-2 align-middle">
          <img src="~/assets/icon/content/book-open.svg" alt="" />
        </div>
        免費試閱
      </button>
      <div class="flex items-center">
        <button class="mr-7.5">
          <div class="w-8 mx-auto mb-1">
            <SvgEbookCart />
          </div>
          立即購買
        </button>
        <button>
          <div class="w-8 mx-auto mb-1">
            <SvgEbookReading />
          </div>
          電子書
        </button>
      </div>
    </nav>

    <div class="px-6 pt-3.5 pb-3.5">
      <h3 class="title mb-4 text-base font-medium">簡介</h3>
      <div>
        <p class="mb-6 leading-loose">{{ book.intro }}</p>
      </div>
    </div>

    <section class="menu">
      <div class="flex justify-between p-4 pl-6">
        <h3 class="title text-base font-medium">目錄</h3>
        <button class="w-5" @click="handleOpen">
          <img
            :src="
              require(`~/assets/icon/common/${
                open ? 'downArrow' : 'rightArrow'
              }.svg`)
            "
            alt=""
          />
        </button>
      </div>
      <ul v-show="open" class="mx-6 pb-9">
        <li v-for="chapter in book.contents" :key="chapter.title" class="mb-1">
          {{ chapter.chapter }}&ensp;{{ chapter.subtitle }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PaperBook',
  layout: 'content',
  data() {
    return {
      open: false,
      book: {
        bookId: 1,
        title: '園子習慣',
        imgSrc: 'sampleBook.jpg',
        ISBN: '9789867868084',
        author: '詹姆斯',
        publisher: '範例股份有限公司',
        pubDate: '2020-10-11',
        price: 225,
        intro:
          'asdf',
        contents: [
          {
            chapter: '序',
            subtitle: '',
          },
          {
            chapter: '前言',
            subtitle: 'asdf',
          },
          {
            chapter: '第一章 ',
            subtitle: 'asdf',
          },
          {
            chapter: '第二章',
            subtitle: 'asdf',
          },
          {
            chapter: '第三章',
            subtitle: 'asdf',
          },
          {
            chapter: '第四章',
            subtitle: 'asdf',
          },
          {
            chapter: '第五章',
            subtitle: 'asdf',
          },
          {
            chapter: '第六章',
            subtitle: '有沒有 API 可以用',
          },
        ],
      },
    }
  },
  created() {
    // 暫時的
    this.book.bookId = parseInt(this.$route.params.id)
  },
  methods: {
    handleOpen() {
      this.open = !this.open
    },
    ...mapActions(['handleAddCollection']),
    ...mapActions(['handleAddShoppingList']),
  },
}
</script>

<style scoped>
.title::before {
  content: '';
  background-color: #eb7513;
  @apply inline-block w-2 h-2 rounded-full mr-1;
}
.menu {
  background-color: #fffaee;
}
</style>
