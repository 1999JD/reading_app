<template>
  <main class="bg-primary">
    <div class="navbar flex justify-between relative w-45 mb-4 mx-auto">
      <button
        :class="[
          mediaType === 'Audio' ? 'bg-yellow' : 'bg-transparent',
          'py-1 px-2 rounded-xl',
        ]"
        @click="mediaType = 'Audio'"
      >
        有聲書
      </button>
      <button
        :class="[
          mediaType === 'Video' ? 'bg-yellow' : 'bg-transparent',
          'py-1 px-2 rounded-xl',
        ]"
        @click="mediaType = 'Video'"
      >
        影片
      </button>
    </div>
    <component :is="`ContentMedia${mediaType}`" />
    <ContentMediaNav />
    <div class="px-6 pt-3.5">
      <h3 class="title mb-4 text-base font-semibold">簡介</h3>
      <p class="mb-6 pb-6 border-b-2 border-gray-300">{{ intro }}</p>
      <h3 class="title mb-2 text-base font-semibold">評論</h3>
      <section class="pb-px">
        <button class="flex items-center ml-auto mb-3">
          <div class="w-5">
            <img
              :src="require('~/assets/icon/content/pen.svg')"
              class="inline-block"
            />
          </div>
          <span> 留言 </span>
        </button>
        <ul>
          <ContentMediaRemark
            v-for="remark in remarks"
            :key="remark.id"
            :remark="remark"
          />
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Media',
  data() {
    return {
      mediaType: 'Audio',
      intro: `教育是成人之美的志業──本書為臺灣核心教育人物，倡議「精緻教育」、「未來學校教育」的優秀教育家──前教育部長吳清基，參與教育行政、決策與執行的重要史料。從對教育的邂逅、淬鍊、實踐以及自身閱歷經驗的述說，提供綜覽與理解現行臺灣教育決策的演進，包括十二年國教、連繫國際以及兩岸教育、高等教育、技職教育、原住民教育等前世今生的脈絡。此書為讓從事教育工作的老師、行政人員可以借鏡、對話與反思的參考`,
      remarks: [
        {
          id: 0,
          name: '王小一',
          date: '2021-06-22',
          content: '評論內容評論內容評論內容評論內容評論內容評論',
        },
        {
          id: 1,
          name: '王小二',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 2,
          name: '王小三',
          date: '2021-06-22',
          content: '評論內容評論內容評論內容評論容評論內容評論內容評論內容',
        },
        {
          id: 3,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 4,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 5,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.title::before {
  content: '';
  background-color: #eb7513;
  @apply inline-block w-2 h-2 rounded-full mr-1;
}
.navbar::before {
  content: '';
  @apply absolute top-0 right-0 bottom-0 left-0 w-0.5 h-4  m-auto;
}
</style>
