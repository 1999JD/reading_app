<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-center items-center fixed z-40 w-full bg-primary py-4"
    >
      <NuxtLink
        to="/content"
        class="
          self-center
          absolute
          left-6
          top-0
          bottom-0
          w-6
          h-fit
          m-auto
          bg-white
          rounded-full
        "
      >
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <p class="text-base font-medium">
        {{ $store.state.contentPageHeading }}
      </p>
    </header>
    <div class="h-14"></div>
    <nuxt />
    <div class="h-18" />
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'LayoutContent',
  middleware({ store, route }) {
    let heading
    const routeName = route.name
    console.log(routeName)
    switch (routeName) {
      case 'content-media-id':
        heading = '現正播放'
        break
      case 'content-paperbook-id':
        heading = '書籍簡介'
        break
      case 'content-ebook-id':
        heading = '書籍簡介'
        break
      case 'content-test-id':
        heading = '測驗挑戰'
        break
    }
    store.commit('SetContentPageHeading', heading)
  },
}
</script>
