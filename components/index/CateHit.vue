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
    <carousel class="bg-gray-300" :per-page="3">
      <slide
        v-for="book in books"
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
      </slide>
      <!-- <slide> Slide 1 Content </slide>
      <slide> Slide 2 Content </slide>
      <slide> Slide 3 Content </slide>
      <slide> Slide 4 Content </slide> -->
    </carousel>
    <!-- <ul
      ref="scrollContainer"
      class="flex justify-center gap-x-14 px-6 overflow-x-scroll"
    ></ul> -->
  </div>
</template>

<script>
export default {
  name: 'CateHit',

  data() {
    return {
      centerItem: 6,
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
  mounted() {},
  methods: {},
}
</script>

<style>
.VueCarousel-inner {
  gap: 56px;
}
</style>
