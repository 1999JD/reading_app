<template>
  <main class="bg-primary">
    <div class="navbar flex justify-between relative w-45 mb-4 mx-auto">
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
    <ContentMediaNav />
    <div class="px-6 pt-3.5">
      <h3 class="title mb-4 text-base font-semibold">簡介</h3>
      <p class="mb-6 pb-6 border-b-2 border-gray-300">{{ intro }}</p>
      <h3 class="title mb-2 text-base font-semibold">評論</h3>
      <section>
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
  name: 'PaperBook',
  layout: 'content',
  data() {
    return {
      intro: '0',
    }
  },
}
</script>
