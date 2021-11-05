<template>
  <div>
    epub page
    <client-only>
      <div id="viewer"></div>
      <a id="prev" class="arrow" @click="prevPage">‹</a>
      <a id="next" class="arrow" @click="nextPage">›</a>

      <div class="progress-wrapper">
        <input
          ref="progress"
          class="progress"
          type="range"
          max="100"
          min="0"
          step="0.01"
          :value="progress"
          :disabled="!bookAvailable"
          @change="onProgressChange($event.target.value)"
          @input="onProgressInput($event.target.value)"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import ePub from 'epubjs'

export default {
  name: 'Reading',
  layout: 'ebook',
  data() {
    return {
      book: {},
      rendition: {},
      progress: 0,
      navigation: {},
      locations: {},
      location: 0,
      bookAvailable: true,
      url: 'http://localhost:7777/sample.epub',
    }
  },
  mounted() {
    this.book = ePub(this.url)
    this.rendition = this.book.renderTo('viewer', {
      width: 414,
      height: 500,
    })
    this.book.rendition.display()
    this.book.ready
      .then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate(750 * (414 / 375))
      })
      .then((result) => {
        // console.log(result)
        this.locations = this.book.locations
        // console.log(typeof this.locations)
      })
  },
  methods: {
    prevPage() {
      this.rendition.prev().then(() => {
        // this.hideTitleAndMenu()
        this.onPressButtonChangePage()
      })
    },
    nextPage() {
      this.rendition.next().then(() => {
        // this.hideTitleAndMenu()
        this.onPressButtonChangePage()
      })
    },
    onProgressChange(progress) {
      this.progress = progress
      const percentage = progress / 100
      this.location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.rendition.display(this.location)
    },
    onProgressInput(progress) {
      const percentage = progress / 100
      this.location =
        percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      this.$refs.progress.style.backgroundSize = `${progress}% 100%`
    },
    onPressButtonChangePage() {
      const currentLocation = this.rendition.currentLocation()
      const progress =
        Math.floor(
          this.locations
            .percentageFromCfi(currentLocation.start.cfi)
            .toFixed(5) * 10000
        ) / 100
      this.progress = progress
      this.onProgressInput(progress)
    },
    jumpTo(href) {
      this.rendition.display(href)
    },
  },
}
</script>
