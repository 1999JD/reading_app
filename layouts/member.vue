<template>
  <div class="pb-18">
    <header class="flex justify-center relative py-4">
      <NuxtLink to="/order" class="absolute left-6 top-0 bottom-0 m-auto w-fit">
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <p>訂購專區</p>
      <div class="flex absolute right-0">
        <img src="~/assets/icon/layout/search.svg" alt="搜尋" />
        <img src="~/assets/icon/layout/message.svg" alt="訊息" />
      </div>
    </header>
    <nuxt />
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'LayoutMember',
}
</script>
