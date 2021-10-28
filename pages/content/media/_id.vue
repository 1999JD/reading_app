<template>
  <main class="bg-primary">
    <div class="flex justify-center mb-4">
      <button
        :class="[
          mediaType === 'Audio' ? 'bg-highlight' : 'bg-transparent',
          'py-1 px-2 rounded-xl',
        ]"
        @click="mediaType = 'Audio'"
      >
        有聲書
      </button>
      <button
        :class="[
          mediaType === 'Video' ? 'bg-highlight' : 'bg-transparent',
          'py-1 px-2 rounded-xl',
        ]"
        @click="mediaType = 'Video'"
      >
        影片
      </button>
    </div>
    <component :is="`ContentMedia${mediaType}`" />
    <ContentNav />
    <div class="px-6 pt-3.5">
      <h3 class="title mb-4 text-base font-semibold">簡介</h3>
      <p class="mb-6 pb-6 border-b-2 border-gray-300">{{ intro }}</p>
      <h3 class="title mb-2 text-base font-semibold">評論</h3>
      <ContentMediaRemarks />
    </div>
  
  </main>
</template>

<script>
export default {
  name: 'Media',
  layout: 'content',
  data() {
    return {
      mediaType: 'Audio',
      intro: `教育是成人之美的志業──本書為臺灣核心教育人物，倡議「精緻教育」、「未來學校教育」的優秀教育家──前教育部長吳清基，參與教育行政、決策與執行的重要史料。從對教育的邂逅、淬鍊、實踐以及自身閱歷經驗的述說，提供綜覽與理解現行臺灣教育決策的演進，包括十二年國教、連繫國際以及兩岸教育、高等教育、技職教育、原住民教育等前世今生的脈絡。此書為讓從事教育工作的老師、行政人員可以借鏡、對話與反思的參考`,
    }
  },
}
</script>

<style>
.title::before {
  content: '';
  background-color: #eb7513;
  @apply inline-block w-2 h-2 rounded-full mr-1;
}
</style>
