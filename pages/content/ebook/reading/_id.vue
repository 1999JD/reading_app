<template>
  <div :class="[ebookStyle.bgColor, 'flex-grow relative']">
    <client-only>
      <section id="viewer" class="w-full"></section>
      <button id="prev" class="arrow left-6" @click="prevPage">
        <img src="~/assets/icon/common/leftArrow.svg" alt="" />
      </button>
      <button id="next" class="arrow right-6" @click="nextPage">
        <img src="~/assets/icon/common/rightArrow.svg" alt="" />
      </button>
      <div class="progress-wrapper box-border absolute bottom-2 w-full px-6">
        <input
          ref="progress"
          class="progress w-full mb-0.5"
          type="range"
          max="100"
          min="0"
          step="0.01"
          :value="progress"
          :disabled="!bookAvailable"
          @change="onProgressChange($event.target.value)"
          @input="onProgressInput($event.target.value)"
        />
        <p class="text-center">
          <span class="text-primary-dark">{{ progress }}% </span>/ 100%
        </p>
      </div>

      <section
        v-show="catalogOpen"
        class="absolute bottom-0 w-full bg-primary py-4 px-6 rounded-t-2xl"
      >
        <h3 class="mb-3 pb-2 text-base font-medium border-b">
          目錄
        </h3>
        <ul>
          <li v-for="chapter in catalog" :key="chapter.label" class="mb-3">
            <button class="ml-" @click="handleSwitchChapter(chapter.href)">
              {{ chapter.label }}
            </button>
          </li>
        </ul>
      </section>

      <section
        v-show="settingOpen"
        class="absolute bottom-0 w-full bg-primary px-8 py-10 rounded-t-2xl"
      >
        <ul>
          <li class="settings__setting">
            <h3 class="settings__title">字型大小</h3>
            <button
              v-for="item in settings.fontSize"
              :key="item.fontSizeClass"
              :class="[
                item.fontSize === ebookStyle.fontSize && 'active--font',
                item.fontSizeClass,
                'settings__button--font',
              ]"
              @click="handleSwitchFontsize(item.fontSize)"
            >
              A
            </button>
          </li>
          <li class="settings__setting">
            <h3 class="settings__title">護眼模式</h3>
            <button
              v-for="color in settings.bgColor"
              :key="color"
              :class="[
                color === ebookStyle.bgColor && 'active--bg',
                color,
                'settings__button--bg',
              ]"
              @click="handleSwitchBgColor(color)"
            ></button>
          </li>
          <!-- <li class="settings__setting">
            <h3 class="settings__title">閱讀方向</h3>
            <button
              v-for="item in settings.direction"
              :key="item.img"
              :class="[
                item.active && 'active--direction',
                'settings__button--direction',
              ]"
              @click="handleSwitchDirection(item.writingMode)"
            >
              <div class="w-4">
                <img
                  :src="require(`~/assets/icon/content/${item.icon}.svg`)"
                  alt=""
                />
              </div>
            </button>
          </li> -->
          <!-- <li class="settings__setting">
            <h3 class="settings__title">明暗度調整</h3>
          </li> -->
        </ul>
      </section>
    </client-only>
  </div>
</template>

<script>
import ePub from 'epubjs'

export default {
  name: 'Reading',
  layout: 'ebook',
  props: {
    settingOpen: {
      type: Boolean,
      default: false,
    },
    catalogOpen: {
      type: Boolean,
      default: false,
    },
    penUse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      book: {},
      bookReady: false,
      rendition: {},
      progress: 0,
      navigation: {},
      locations: {},
      location: 0,
      bookAvailable: true,
      catalog: [],
      url: 'http://localhost:7777/55a.epub',
      ebookStyle: {
        bgColor: 'bg-white',
        fontSize: 18,
        writingMode: 'horizontal-tb',
      },
      settings: {
        fontSize: [
          { fontSizeClass: 'text-sm', fontSize: 14 },
          { fontSizeClass: 'text-lg', fontSize: 18 },
          { fontSizeClass: 'text-2xl', fontSize: 20 },
          { fontSizeClass: 'text-2.5xl', fontSize: 24 },
        ],
        bgColor: ['bg-ebook-white', 'bg-ebook-light', 'bg-ebook-dark'],
        // direction: [
        //   {icon: 'south', writingMode: 'vertical-rl' },
        //   {icon: 'east',writingMode: 'horizontal-tb' },
        // ],
      },
    }
  },
  mounted() {
    this.book = ePub(this.url)
    this.rendition = this.book.renderTo('viewer', {
      width: window.innerWidth,
      height: window.innerHeight - 192,
    })
    this.book.rendition.display()
    this.book.ready
      .then(() => {
        this.navigation = this.book.navigation
        return this.book.locations.generate(100)
      })
      .then((_result) => {
        this.locations = this.book.locations
        this.rendition.themes.fontSize(this.ebookStyle.fontSize + 'px')

        this.rendition.themes.default({
          html: {
            'writing-mode': `${this.ebookStyle.writingMode} !important`,
          },
        })
        this.bookReady = true
      })
    this.book.loaded.navigation.then((navigation) => {
      this.catalog = navigation.toc.map((chapter) => {
        return {
          label: chapter.label,
          href: chapter.href,
        }
      })
    })
    const vm = this
    this.rendition.on('selected', function (cfiRange, _contents) {
      const penUse = vm.penUse
      if (penUse) this.book.rendition.annotations.highlight(cfiRange)
      // rendition.display(cfiRange);
    })
  },
  methods: {
    async prevPage() {
      this.book.package.metadata.direction === 'rtl'
        ? await this.rendition.next()
        : await this.rendition.prev()
      await this.onPressButtonChangePage()
    },
    async nextPage() {
      this.book.package.metadata.direction === 'rtl'
        ? await this.rendition.prev()
        : await this.rendition.next()
      await this.onPressButtonChangePage()
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
    },
    onPressButtonChangePage() {
      if (!this.bookReady) {
        setTimeout(this.onProgressInput, 1000)
        return
      }
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
    handleSwitchBgColor(color) {
      this.ebookStyle.bgColor = color
    },
    handleSwitchFontsize(fontSize) {
      this.ebookStyle.fontSize = fontSize
      this.rendition.themes.fontSize(fontSize + 'px')
      // this.rendition.themes.default({
      //   html: {
      //     'font-size': `${this.ebookStyle.fontSize}px !important`,
      //     'writing-mode': `${this.ebookStyle.writingMode} !important`,
      //   },
      // })
    },
    // handleSwitchDirection(writingMode) {
    //   this.book.package.metadata.direction =
    //     writingMode === 'vertical-rl' ? 'rtl' : 'ltr'
    //   this.ebookStyle.writingMode = writingMode
    //   this.settings.direction.forEach((element) => {
    //     if (element.writingMode === writingMode) element.active = true
    //     else element.active = false
    //   })
    //   this.rendition.themes.default({
    //     html: {
    //       'font-size': `${this.ebookStyle.fontSize}px !important`,
    //       'writing-mode': `${this.ebookStyle.wraitingMode} !important`,
    //     },
    //   })
    // },
    handleSwitchChapter(href) {
      this.rendition.display(href)
    },
  },
}
</script>

<style scoped>
.arrow {
  @apply absolute inset-y-0  w-12 h-14 my-auto bg-primary opacity-80;
}
.settings__setting {
  @apply flex items-center h-9 px-2.5 mb-2 bg-white rounded-2xl;
}
.settings__title {
  @apply mr-3.5;
}
.settings__button--font {
  @apply w-4 text-center mr-6 mb-2 leading-none z-0 self-end;
}
.active--font {
  @apply relative;
}
.active--font::before {
  content: '';
  @apply absolute -z-1 inset-x-0 bottom-0 w-full h-1 mx-auto bg-yellow rounded-sm;
}
.settings__button--bg {
  @apply w-6 h-6 mr-3 rounded-full shadow-sm;
}
.active--bg {
  @apply border-4 border-yellow;
}
.settings__button--direction {
  @apply flex justify-center items-center w-6 h-6 mr-3 rounded-full shadow-sm;
}
.active--direction {
  @apply bg-yellow;
}
</style>
