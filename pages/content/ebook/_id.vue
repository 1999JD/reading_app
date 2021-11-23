<template>
  <main class="pb-16 bg-primary">
    <div class="w-35 mx-auto mb-6 rounded-md overflow-hidden">
      <img :src="require(`~/assets/img/${book.imgSrc}`)" alt="" />
    </div>
    <h2 class="mb-5 text-center text-base font-medium">{{ book.title }}</h2>
    <section
      class="relative mx-6 mb-6 p-2.5 pb-3.5 bg-white rounded-md shadow-content"
    >
      <ul class="mb-5 pl-10 text-xs">
        <li class="mb-1">作者: {{ book.author }}</li>
        <li class="mb-1">ISBN: {{ book.ISBN }}</li>
        <li class="mb-1">出版社: {{ book.publisher }}</li>
        <li class="mb-1">出版日期: {{ book.pubDate }}</li>
      </ul>
      <p class="pl-10 text-quote text-base font-medium">NT${{ book.price }}</p>
      <button class="absolute top-3 right-3" @click="handleAddCollection(book)">
        <div class="store inline-block w-5 mr-1 align-middle">
          <img src="~/assets/icon/common/store.svg" alt="" />
        </div>
        收藏
      </button>
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
          shadow-content
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
            <img src="~/assets/icon/content/cart.png" alt="" />
          </div>
          立即購買
        </button>
        <button>
          <div class="w-8 mx-auto mb-1">
            <img src="~/assets/icon/content/reading.png" alt="" />
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
        title: '教育情緣 - 回首七十人生教育路',
        imgSrc: 'sampleBook.jpg',
        ISBN: '9789867868084',
        author: '吳清基',
        publisher: '台灣知識庫股份有限公司',
        pubDate: '2020-10-11',
        price: 225,
        intro:
          '教育是成人之美的志業──本書為臺灣核心教育人物，倡議「精緻教育」、「未來學校教育」的優秀教育家──前教育部長吳清基，參與教育行政、決策與執行的重要史料。從對教育的邂逅、淬鍊、實踐以及自身閱歷經驗的述說，提供綜覽與理解現行臺灣教育決策的演進，包括十二年國教、連繫國際以及兩岸教育、高等教育、技職教育、原住民教育等前世今生的脈絡。此書為讓從事教育工作的老師、行政人員可以借鏡、對話與反思的參考。',
        contents: [
          {
            chapter: '序',
            subtitle: '',
          },
          {
            chapter: '前言',
            subtitle: '回首七十人生教育路',
          },
          {
            chapter: '第一章 ',
            subtitle: '中學校長感召 矢志教育生涯',
          },
          {
            chapter: '第二章',
            subtitle: '大學名師啟蒙 堅定教育信念',
          },
          {
            chapter: '第三章',
            subtitle: '研究所獲提攜 教育登堂入室',
          },
          {
            chapter: '第四章',
            subtitle: '承乏國教研習 深耕基層教育',
          },
          {
            chapter: '第五章',
            subtitle: '主持中等教育 全力作育英才',
          },
          {
            chapter: '第六章',
            subtitle: '調陞內閣六組 擴增行政視野',
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
  },
}
</script>

<style scoped>
.title::before {
  content: '';
  background-color: #eb7513;
  @apply inline-block w-2 h-2 rounded-full mr-1;
}
.store {
  filter: invert(85%) sepia(87%) saturate(1075%) hue-rotate(315deg)
    brightness(100%) contrast(101%);
}
.menu {
  background-color: #fffaee;
}
</style>
