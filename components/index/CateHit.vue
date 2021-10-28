<template>
  <div class="hit pt-6 pb-2.5">
    <h2
      class="
        w-fit
        m-auto
        mb-4
        pb-1
        text-base
        font-medium
        border-b-4 border-solid border-third
      "
    >
      熱門排行
    </h2>
    <ul
      ref="scrollContainer"
      class="flex justify-center gap-x-14 px-6 overflow-x-scroll"
      @scroll="scrollEvent"
    >
      <li
        v-for="book in books"
        v-show="
          book.id === centerItem ||
          book.id === centerItem - 1 ||
          book.id === centerItem + 1
        "
        :key="book.id"
        class="
          box-border
          self-center
          flex-shrink-0
          relative
          w-44
          p-2.5
          pt-4
          bg-primary
          rounded
          shadow-img
        "
      >
        <div class="w-28 m-auto">
          <img
            :src="require(`~/assets/img/${book.src}.jpg`)"
            :alt="book.alt"
            class="shadow-img"
          />
        </div>

        <h3
          :class="[
            centerItem === book.id ? 'text-base' : 'text-sm',
            'mt-4 mb-4  text-center',
          ]"
        >
          {{ book.title }}
        </h3>
        <p :class="[centerItem !== book.id ? 'text-xs' : 'text-sm', 'mb-4']">
          {{ book.intro }}
        </p>
        <span class="text-gray-400"> 觀看人數：{{ book.view }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CateHit',
  data() {
    return {
      centerItem: 3,
      scrollLeftNum: 0,
      books: [
        {
          id: 0,
          title: '素養人才玲',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 1,
          title: '素養人才一',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 2,
          title: '素養人才二',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 3,
          title: '素養人才三',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 4,
          title: '素養人才四',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
      ],
      width: 0,
    }
  },
  created() {},
  mounted() {
    this.scrollLeftNum = this.$refs.scrollContainer.scrollLeft
  },
  methods: {
    scrollEvent() {
      this.scrollLeftNum < this.$refs.scrollContainer.scrollLeft
        ? this.centerItem--
        : this.centerItem++
    },
  },
}
</script>

<style scoped>
.hit {
  margin-bottom: 4.5rem;
}
.card__img {
  width: 104px;
  height: 117px;
}
.card__img--center {
  width: 7rem;
  height: 7.875rem;
}
</style>
