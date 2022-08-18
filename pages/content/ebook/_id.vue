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
      <p class="pl-10 text-tangerine text-base font-medium">
        NT${{ book.price }}
      </p>
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
          shadow-sm
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
          '東西出等等，是一直在，第天說很之後，昨天為，的世界就真天以的其實是，如果是了有點太。好好聽意說出，我的的圖是有看以直接的聲，的這麼好喜歡的風格⋯我都是一個再來卡到這。管是怎一個出現盼，我只能好像有中間不都有歉我。是我完了有興趣從期⋯太久沒你的什麼就是這也看媽的，我超因知道自自己是兩直覺什麼，要一以做感多現在還⋯面那個完全歡家哪個婚相關的，小孩的結束？調整還是不會有親卡想說，這不太底的看是還是，因為感覺真好可以感覺也很，身體到小為這最棒有興趣，憶抽發現還老闆被：朋友說會覺自己以後我還是很。',
        contents: [
          {
            chapter: '序',
            subtitle: '',
          },
          {
            chapter: '前言',
            subtitle: '',
          },
          {
            chapter: '第一章 ',
            subtitle: '東西出等等',
          },
          {
            chapter: '第二章',
            subtitle: '管是怎一個出現盼',
          },
          {
            chapter: '第三章',
            subtitle: '這是什麼鬼東西',
          },
          {
            chapter: '第四章',
            subtitle: '誰這麼無聊？',
          },
          {
            chapter: '第五章',
            subtitle: '給做版面設計的人',
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
