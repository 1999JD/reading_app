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
    <div class="relatvie mb-2.5 overflow-hidden">
      <ul
        :style="{ transform: `translateX(${currentTranslate}px)` }"
        class="slide"
      >
        <li
          v-for="(book, index) in books"
          :key="book.bookId"
          :class="[index === currentIndex ? 'current' : '']"
          @touchstart.prevent="mousedown(index, $event)"
          @touchmove.prevent="mousemove"
          @touchend.prevent="mouseup"
          @mousedown.prevent="mousedown(index, $event)"
          @mousemove.prevent="mousemove"
          @mouseup.prevent="mouseup"
        >
          <div class="w-28 m-auto">
            <img
              :src="require(`~/assets/img/${book.imgSrc}`)"
              class="shadow-img"
            />
          </div>

          <h3
            :class="[
              index === currentIndex ? 'text-base' : 'text-sm',
              'mt-4 mb-2  text-center',
            ]"
          >
            {{ book.name }}
          </h3>
          <p :class="[index !== currentIndex ? 'text-xs' : 'text-sm', 'mb-4']">
            {{ book.desc }}
          </p>
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
      isDragging: false,
      startPos: 0,
      currentTranslate: 0,
      prevTranslate: -220,
      animationID: 0,
      currentIndex: 0,
    }
  },
  created() {
    this.currentIndex = 3
    this.currentTranslate = (this.currentIndex - 1) * -216 + -222 + 99
  },
  methods: {
    mousedown(index, event) {
      this.isDragging = true
      this.currentIndex = index
      this.startPos = this.getPositionX(event)
      this.animationID = requestAnimationFrame(this.animation)
    },
    mousemove(event) {
      if (this.isDragging) {
        const currentPosition = this.getPositionX(event)
        this.currentTranslate =
          this.prevTranslate + currentPosition - this.startPos
      }
    },
    mouseup() {
      cancelAnimationFrame(this.animationID)
      this.isDragging = false
      const movedBy = this.currentTranslate - this.prevTranslate
      if (movedBy < -100 && this.currentIndex < this.books.length - 1)
        this.currentIndex += 1
      if (movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1
      this.setPositionByIndex()
    },
    animation() {
      if (this.isDragging) requestAnimationFrame(this.animation)
    },
    getPositionX(event) {
      return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].clientX
    },
    setPositionByIndex() {
      this.currentTranslate = (this.currentIndex - 1) * -216 + -222 + 99
      this.prevTranslate = this.currentTranslate
    },
  },
}
</script>

<style scoped>
.slide {
  @apply box-border flex items-center transition-all;

  touch-action: none;
}
.slide li {
  @apply box-border self-center flex-shrink-0 relative w-40 mx-7 p-2.5 pt-4 bg-primary rounded shadow-img;
}

.slide .current {
  @apply w-44;
}
</style>
