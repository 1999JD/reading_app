<template>
  <div class="px-6 mb-5">
    <div class="mb-2.5">
      <video controls class="w-full h-full rounded-md">
        <source :src="require(`~/assets/media/${fileName}.mp4`)" />
      </video>
    </div>
    <div class="flex justify-end">
      <CommonStore v-slot="{ note }" :book="book" class="w-7 mr-10">
        <span class="whitespace-nowrap">{{ note }}</span>
      </CommonStore>
      <button class="w-7">
        <img src="~/assets/icon/content/download.svg" class="m-auto" />
        <span class=""> 下載 </span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Video',
  data() {
    return {
      fileName: 'exampleVideo',
      book: {
        bookId: 1,
        name: '園子習慣',
        desc: '書本小標內容書本小標內容書本小標內容書本小標內容書本小標內容書本小容',
        author: '詹姆斯',
        publishTime: '2021-06-30',
        imgSrc: 'sampleBook.jpg',
        imgAlt: '',
      },
    }
  },
  created() {
    // 暫時的
    this.book.bookId = parseInt(this.$route.params.id)
  },
  methods: {
    ...mapActions(['handleAddCollection']),
  },
}
</script>