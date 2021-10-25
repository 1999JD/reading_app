<template>
  <div class="px-6 mb-3">
    <div class="video-wrap mb-2.5">
      <video controls class="w-full h-full rounded-md">
        <source :src="require(`~/assets/media/${fileName}.mp4`)" />
      </video>
    </div>
    <div class="flex justify-end">
      <button class="mr-6">
        <img src="~/assets/icon/store.svg" class="m-auto" />
        <span class=""> 收藏 </span>
      </button>
      <button>
        <img src="~/assets/icon/download.svg" class="m-auto" />
        <span class=""> 下載 </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data() {
    return {
      fileName: 'exampleVideo',
    }
  },
}
</script>

<style>
.video-wrap {
  width: 366px;
  height: 214px;
}
</style>
