<template>
  <div class="wrap">
    <header class="flex justify-center relative py-4">
      <NuxtLink to="/order" class="absolute left-6 top-0 bottom-0 m-auto">
        <img src="~/assets/icon/backArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <p>訂購專區</p>
      <div class="flex absolute right-0">
        <img src="~/assets/icon/search.svg" alt="搜尋" />
        <img src="~/assets/icon/catalog.svg" alt="訊息" />
      </div>
    </header>
    <nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  name: 'LayoutMember',
}
</script>

<style>
a {
  height: fit-content;
}

.wrap {
  padding-bottom: 72px;
}
</style>
