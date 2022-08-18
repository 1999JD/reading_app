<template>
  <div class="py-10">
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

    <div class="relative z-0 w-full py-5 overflow-hidden">
      <ul
        ref="slide"
        v-drag:x
        class="slide flex left-1/5"
        @v-drag-end="handleDrag($event)"
        @mousedown="handleMouseDown"
        @touchstart="handleMouseDown"
      >
        <li
          v-for="(book, index) in books"
          :key="book.bookId"
          :class="[
            index === currentIndex && 'transform scale-110',
            'slide_item',
          ]"
        >
          <div class="w-28 m-auto">
            <img
              :src="require(`~/assets/img/${book.imgSrc}`)"
              class="shadow-sm"
            />
          </div>

          <h3 class="mt-4 mb-2 text-center">{{ book.name }}{{ index }}</h3>
          <p class="mb-4">{{ book.desc }}</p>
          <span class="text-gray-400 text-xs">
            觀看人數：{{ book.download }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CateHit',
  props: {
    books: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      startPos: 0,
      endPos: 0,
      currentIndex: 0,
      isDragging: false,
    }
  },
  mounted() {
    window.addEventListener('mouseup', this.handleDragEnd)
    window.addEventListener('touchend', this.handleDragEnd)
  },
  beforeDestroy() {
    window.removeEventListener('mouseup', this.handleDragEnd)
    window.removeEventListener('touchend', this.handleDragEnd)
  },
  methods: {
    handleDrag(event) {
      console.log(event.pageX)
    },
    getPositionX(event) {
      return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX
    },
    handleMouseDown(event) {
      this.startPos = this.getPositionX(event)
      this.isDragging = true
    },
    handleDragEnd(event) {
      this.endPos = this.getPositionX(event)
      const moveby = this.endPos - this.startPos
      this.isDragging = false
      if (Math.abs(moveby) > window.innerWidth / 3) {
        if (moveby > 0 && this.currentIndex) this.currentIndex--
        else if (moveby < 0 && this.currentIndex < this.books.length - 1)
          this.currentIndex++
      }

      this.$refs.slide.style.left = `${this.currentIndex * -60 + 20}%`
      // 60 為 3/5 ，即為一個 slide item 的寬度},
    },
  },
}
</script>

<style lang="postcss" scoped>
.slide_item {
  margin-right: 10%;
  margin-left: 10%;
  @apply flex-shrink-0 relative w-2/5 p-2.5 pt-4 bg-primary rounded shadow-md transition-transform;
}
</style>
