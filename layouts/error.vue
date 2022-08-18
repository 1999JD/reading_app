<template>
  <div class="container mt-10">
    <LayoutSearchHeader />
    <p class="my-13 text-center text-xl">Sorry，您所訪問的頁面不存在 !</p>
    <div class="w-67 mx-auto">
      <img src="~/assets/img/404.jpeg" alt="404圖片" />
    </div>
    <NuxtLink
      to="/"
      class="
        block
        w-44
        mx-auto
        py-2.5
        bg-yellow
        text-center
        rounded-2xl
        shadow-sm
      "
    >
      返回首頁
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
