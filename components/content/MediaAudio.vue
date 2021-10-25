<template>
  <div class="bg-primary px-6">
    <div class="flex bg-white rounded-md py-2 pl-3">
      <img src="~/assets/img/book.svg" alt="書籍圖片" class="" />
      <div class="flex-grow flex flex-col justify-between mr-4">
        <h2 class="text-center">教育情緣-回首七十人生教育路</h2>
        <div class="self-end">
          <button class="mr-6">
            <span class="sr-only"> 收藏 </span>
            <img src="~/assets/icon/store.svg" />
          </button>
          <button>
            <span class="sr-only"> 下載 </span>
            <img src="~/assets/icon/download.svg" />
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
        <img :src="require(`~/assets/icon/backTen.svg`)" />
      </button>
      <button class="mx-5" @click.prevent="handleAudioPlay">
        <span class="sr-only"> 播放 </span>
        <img :src="require(`~/assets/icon/play.svg`)" />
      </button>
      <button @click.prevent="handleAudioTime('forward')">
        <span class="sr-only"> 前進十秒 </span>
        <img :src="require(`~/assets/icon/forwardTen.svg`)" />
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
// <audio ref="audioPlayer" :src="'http://localhost:5500/media/exampleAudio.mp3'"></audio>
export default {
  name: 'Audio',
  data() {
    return {
      play: false,
      duration: 0,
      rangeValue: 0,
    }
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
