<template>
  <div class="container">
    <!-- <h1 v-if="error.statusCode === 404">Page not found</h1> -->
    <!-- <h1 v-else>An error occurred</h1> -->
    <p class="my-13 text-center text-xl">Sorry，您所訪問的頁面不存在 !</p>
    <div class="w-67 mx-auto mb-18">
      <img src="~/assets/img/404.jpeg" alt="404圖片" />
    </div>
    <NuxtLink
      to="/"
      class="
        block
        w-44
        mx-auto
        mb-28
        py-2.5
        bg-highlight
        text-center
        rounded-2.5xl
        shadow-btn-pay
      "
    >
      返回首頁
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'index',
  middleware: [
    function ({ redirect }) {
      return redirect(301, '/')
    },
  ],
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
