<template>
  <div :class="[isDragging && 'pan-x', 'py-10']">
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
        style="transform: translateX(0)"
        class="
          slide
          relative
          left-1/5
          flex
          transition-transform
          duration-300
          ease-out
        "
      >
        <li
          v-for="(book, index) in books"
          :key="book.bookId"
          :class="[
            index === currentIndex && 'transform scale-110',
            'slide_item',
          ]"
          @mousedown="handleMouseDown($event, index)"
          @mousemove="handleDrag"
          @mouseleave="handleMouseUp"
          @mouseup="handleMouseUp"
          @touchstart="handleMouseDown($event, index)"
          @touchmove="handleDrag"
          @touchend="handleMouseUp"
        >
          <div @drag-start="(event) => event.preventDefault()">
            <div class="w-28 m-auto">
              <img
                :src="require(`~/assets/img/${book.imgSrc}`)"
                class="shadow-sm pointer-events-none"
              />
            </div>

            <h3 class="mt-4 mb-2 text-center">{{ book.name }}{{ index }}</h3>
            <p class="mb-4">{{ book.desc }}</p>
            <span class="text-gray-400 text-xs">
              觀看人數：{{ book.download }}
            </span>
          </div>
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
      isDragging: false,
      startPos: 0,
      currentTranslate: 0,
      prevTranslate: 0,
      animationID: null,
      currentIndex: 0,
    }
  },
  mounted() {
    window.oncontextmenu = function (event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
  },
  methods: {
    getPositionX(event) {
      return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX
    },
    handleMouseDown(event, index) {
      this.currentIndex = index
      this.startPos = this.getPositionX(event)
      this.isDragging = true
      this.animationID = window.requestAnimationFrame(this.animation)
    },
    handleDrag(event) {
      if (!this.isDragging) return
      const currentPosition = this.getPositionX(event)
      this.currentTranslate =
        this.prevTranslate + currentPosition - this.startPos
    },
    handleMouseUp() {
      window.cancelAnimationFrame(this.animationID)
      this.isDragging = false
      const moveby = this.currentTranslate - this.prevTranslate
      if (Math.abs(moveby) > window.innerWidth / 3) {
        if (moveby > 0 && this.currentIndex) this.currentIndex--
        else if (moveby < 0 && this.currentIndex < this.books.length - 1)
          this.currentIndex++
      }
      this.setPositionByIndex()

      // 原本的
      // this.endPos = this.getPositionX(event)
      // const moveby = this.endPos - this.startPos
      // this.isDragging = false
      // if (Math.abs(moveby) > window.innerWidth / 3) {
      //   if (moveby > 0 && this.currentIndex) this.currentIndex--
      //   else if (moveby < 0 && this.currentIndex < this.books.length - 1)
      //     this.currentIndex++
      // }

      // this.$refs.slide.style.left = `${this.currentIndex * -60 + 20}%`
      // 60 為 3/5 ，即為一個 slide item 的寬度},
    },
    animation() {
      this.setSliderPosition()
      if (this.isDragging) window.requestAnimationFrame(this.animation)
    },
    setPositionByIndex() {
      this.currentTranslate = this.currentIndex * -(window.innerWidth * 0.6)
      this.prevTranslate = this.currentTranslate
      this.setSliderPosition()
    },
    setSliderPosition() {
      this.$refs.slide.style.transform = `translateX(${this.currentTranslate}px)`
    },
  },
}
</script>

<style lang="postcss" scoped>
.slide_item {
  margin-right: 10%;
  margin-left: 10%;
  @apply flex-shrink-0 relative w-2/5 p-2.5 pt-4 bg-primary rounded shadow-md transition-transform select-none;
}

.pan-x {
  touch-action: pan-x;
}
</style>
