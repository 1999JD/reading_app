<template>
  <div class="bg-primary px-6">
    <div class="flex bg-white rounded-md py-2 pl-3">
      <div class="w-24 mr-2 flex-shrink-0">
        <img :src="require(`~/assets/img/${book.imgSrc}`)" :alt="book.imgAlt" />
      </div>
      <div class="flex-grow flex flex-col justify-between mr-4">
        <h2>{{ book.name }}</h2>
        <div class="flex self-end">
          <CommonStore :book="book" class="mr-6" />
          <button>
            <span class="sr-only"> 下載 </span>
            <img src="~/assets/icon/content/download.svg" />
          </button>
        </div>
      </div>
    </div>
    <div class="relative my-9">
      <span class="absolute left-0 -bottom-6">{{
        Math.round(rangeValue)
      }}</span>
      <input
        v-model="rangeValue"
        type="range"
        min="0"
        :max="duration"
        step="1"
        class="w-full h-0.5"
        @input="handleAudioProgress"
      />
      <span class="absolute right-0 -bottom-6"
        >-{{ Math.round(duration - rangeValue) }}</span
      >
    </div>
    <div class="flex items-center justify-center mb-5">
      <button @click.prevent="handleAudioTime('back')">
        <span class="sr-only"> 倒退十秒 </span>
        <img :src="require(`~/assets/icon/content/backTen.svg`)" />
      </button>
      <button class="w-14 mx-5" @click.prevent="handleAudioPlay">
        <span class="sr-only"> 播放 </span>
        <img
          :src="require(`~/assets/icon/content/${play ? 'stop' : 'play'}.svg`)"
        />
      </button>
      <button @click.prevent="handleAudioTime('forward')">
        <span class="sr-only"> 前進十秒 </span>
        <img :src="require(`~/assets/icon/content/forwardTen.svg`)" />
      </button>
    </div>
    <audio
      ref="audioPlayer"
      :src="require(`~/assets/media/exampleAudio.mp3`).default"
      @timeupdate="detectTimeUpdate"
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  data() {
    return {
      book: {
        bookId: 1,
        name: '園子習慣',
        desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小容',
        author: '詹姆斯',
        publishTime: '2021-06-30',
        imgSrc: 'sampleBook.jpg',
        imgAlt: '',
      },
      play: false,
      duration: 0,
      rangeValue: 0,
    }
  },
  created() {
    // 暫時的
    this.book.bookId = parseInt(this.$route.params.id)
  },

  methods: {
    handleAudioTime(behavior) {
      this.$refs.audioPlayer.play()
      behavior === 'forward' ? (this.rangeValue += 10) : (this.rangeValue -= 10)
      this.$refs.audioPlayer.currentTime = this.rangeValue
    },
    handleAudioPlay() {
      this.duration = Math.round(this.$refs.audioPlayer.duration)
      this.play = !this.play
      if (this.play) this.$refs.audioPlayer.play()
      else this.$refs.audioPlayer.pause()
    },
    detectTimeUpdate(e) {
      this.rangeValue = this.$refs.audioPlayer.currentTime
    },
    handleAudioProgress(e) {
      this.$refs.audioPlayer.play()
      this.$refs.audioPlayer.currentTime = this.rangeValue
    },
  },
}
</script>

<style>
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  position: relative; /* 設為相對位置，為了前後區塊的絕對位置而設定 */
  width: 10px;
  height: 10px;
  background-color: '#220000' !important;
  border-radius: 50%;
  transition: 0.2s; /* 點選放大時候的漸變時間 */
}
</style>
