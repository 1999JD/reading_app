<template>
  <div class="pt-8 px-6">
    <article class="pb-32 text-lg">
      我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容。
      我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容
      我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容
      我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容
      我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容我是書本內容
    </article>
    <ContentEbookArrowButton :arrow-left="true" />
    <ContentEbookArrowButton :arrow-left="false" />
    <!-- input range -->

    <ContentEbookSettings v-if="openSetting" />
    <ContentEbookRange v-else />
  </div>
</template>

<script>
export default {
  name: 'EbookPage',
  layout: 'ebook',
  data() {
    return {
      totalPage: 0,
      currentPage: 1,
      openSetting: true,
    }
  },
}
</script>

