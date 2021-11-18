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
        v-show="settingOpen"
        class="absolute bottom-0 w-full bg-primary px-8 py-10 rounded-t-2xl"
      >
        <button class="absolute top-3 right-3" @click="$emit('onClickSetting')">
          <img src="~/assets/icon/common/downArrow.svg" alt="收起" />
        </button>
        <ul>
          <li class="settings__setting">
            <h3 class="settings__title">字型大小</h3>
            <button
              v-for="item in settings.fontSize"
              :key="item.fontSizeClass"
              :class="[
                item.active && 'active--font',
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
              v-for="item in settings.bgColor"
              :key="item.bgColor"
              :class="[
                item.active && 'active--bg',
                item.bgColor,
                'settings__button--bg',
              ]"
              @click="handleSwitchBgColor(item.bgColor)"
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
      default: undefined,
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
      url: 'http://localhost:7777/chinese-vertical.epub',
      ebookStyle: {
        bgColor: 'white',
        fontSize: 18,
        writingMode: 'horizontal-tb',
      },
      settings: {
        fontSize: [
          {
            fontSizeClass: 'text-sm',
            fontSize: 14,
            active: false,
          },
          {
            fontSizeClass: 'text-lg',
            fontSize: 18,
            active: true,
          },
          {
            fontSizeClass: 'text-2xl',
            fontSize: 20,
            active: false,
          },
          {
            fontSizeClass: 'text-2.5xl',
            fontSize: 24,
            active: false,
          },
        ],
        bgColor: [
          {
            bgColor: 'bg-ebook-white',
            active: true,
          },
          {
            bgColor: 'bg-ebook-light',
            active: false,
          },
          {
            bgColor: 'bg-ebook-dark',
            active: false,
          },
        ],
        // direction: [
        //   {
        //     icon: 'south',
        //     writingMode: 'vertical-rl',
        //     active: false,
        //   },
        //   {
        //     icon: 'east',
        //     writingMode: 'horizontal-tb',
        //     active: true,
        //   },
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
        this.rendition.themes.default({
          html: {
            'font-size': `${this.ebookStyle.fontSize}px !important`,
            'writing-mode': `${this.ebookStyle.writingMode} !important`,
          },
        })
        this.bookReady = true
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
    jumpTo(href) {
      this.rendition.display(href)
    },
    handleSwitchBgColor(color) {
      this.ebookStyle.bgColor = color
      this.settings.bgColor.forEach((element) => {
        if (element.bgColor === color) element.active = true
        else element.active = false
      })
    },
    handleSwitchFontsize(fontSize) {
      this.ebookStyle.fontSize = fontSize
      this.settings.fontSize.forEach((element) => {
        if (element.fontSize === fontSize) element.active = true
        else element.active = false
      })
      this.rendition.themes.default({
        html: {
          'font-size': `${this.ebookStyle.fontSize}px !important`,
          'writing-mode': `${this.ebookStyle.writingMode} !important`,
        },
      })
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
  @apply absolute -z-1 inset-x-0 bottom-0 w-full h-1 mx-auto bg-highlight rounded-sm;
}
.settings__button--bg {
  @apply w-6 h-6 mr-3 rounded-full shadow-ebook-btn;
}
.active--bg {
  @apply border-3 border-highlight;
}
.settings__button--direction {
  @apply flex justify-center items-center w-6 h-6 mr-3 rounded-full shadow-ebook-btn;
}
.active--direction {
  @apply bg-highlight;
}
</style>
