<template>
  <div>
    <header
      class="flex justify-center items-center relative bg-primary py-5"
    >
      <NuxtLink
        to="/content"
        class="self-center absolute left-6 top-0 bottom-0 h-fit m-auto"
      >
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <p>現正播放</p>
    </header>
    <nuxt />
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'LayoutContent',
}
</script>
