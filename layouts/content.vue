<template>
  <div>
    <header class="flex justify-center relative bg-primary pt-5 pb-3">
      <NuxtLink to="/content" class="absolute left-6 top-0 bottom-0 m-auto">
        <img src="~/assets/icon/backArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <p>現正播放</p>
    </header>
    <nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  name: 'LayoutContent',
}
</script>

<style>
a {
  height: fit-content;
}
</style>
