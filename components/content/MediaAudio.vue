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
    <!-- <div>進度條</div>
    <div>
      控制鍵
      <button>
        <span class="sr-only"> 倒退十秒 </span>
      </button>
      <button>
        <span class="sr-only"> 播放 </span>
      </button>
      <button>
        <span class="sr-only"> 前進十秒 </span>
      </button>
    </div> -->
    <audio
      ref="audioPlayer"
      :src="require(`~/assets/media/exampleAudio.mp3`).default"
    ></audio>
    <button @click.prevent="controlAudio">點我控制播放</button>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  data() {
    return {
      play: false,
    }
  },
  methods: {
    controlAudio() {
      this.play = !this.play
      if (this.play) this.$refs.audioPlayer.play()
      else this.$refs.audioPlayer.pause()
    },
  },
}
</script>
