<template>
  <div class="hit pt-6 pb-2.5">
    <h2>熱門排行</h2>
    <ul
      ref="scrollContainer"
      class="flex overflow-x-scroll"
      @scroll="scrollEvent"
    >
      <li
        v-for="book in books"
        :key="book.id"
        class="self-center mx-7 pb-3 bg-primary filter drop-shadow-sm"
      >
        <div
          :class="[
            centerItem === book.id
              ? 'card__img--center mx-8'
              : 'card__img mx-7',
            ' mt-4 overflow-hidden',
          ]"
        >
          <img
            :src="require(`~/assets/img/${book.src}.jpg`)"
            :alt="book.alt"
            :width="innerWH.width"
            :height="innerWH.height"
            class="w-full h-auto"
          />
        </div>
        <h3
          :class="[
            centerItem !== book.id ? 'text-sm' : 'text-base',
            'mt-4 mb-2  text-center',
          ]"
        >
          {{ book.title }}
        </h3>
        <p :class="[centerItem !== book.id ? 'text-xs' : 'text-sm', 'mb-4']">
          {{ book.intro }}
        </p>
        <span class="text-gray-400">
          {{ book.view }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CateHit',
  data() {
    return {
      innerWH: {
        width: 112,
        height: 126,
      },
      centerItem: 3,
      books: [
        {
          id: 0,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 1,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 2,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 3,
          title: '素養人才',
          intro:
            '我是內容我是內容我是內容我是內容我是內容我是內容我是內容我是......',
          view: 888,
          src: 'sampleBook',
          alt: '素養人才',
        },
        {
          id: 4,
          title: '素養人才',
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
  created() {
    this.centerItem = Math.ceil(this.books.length / 2) - 1
  },
  mounted() {
    this.width = this.$refs.scrollContainer.scrollWidth
  },
  methods: {
    scrollEvent() {},
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
