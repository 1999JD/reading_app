<template>
  <div>
    <header
      :class="[
        $route.path.search('order') !== -1 ? 'bg-white' : 'bg-primary',
        `flex justify-center fixed w-full mb-6 py-4 z-10 shadow-lg`,
      ]"
    >
      <NuxtLink
        :to="$store.state.backRoute"
        class="
          block
          absolute
          top-0
          bottom-0
          left-6
          my-auto
          w-6
          h-6
          bg-white
          rounded-full
        "
      >
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回" />
      </NuxtLink>
      <h2 class="text-base font-medium">
        {{ $store.state.heading }}
      </h2>
      <div class="flex items-center absolute top-0 bottom-0 right-6 my-auto">
        <button type="button" class="w-5 mr-3">
          <img src="~/assets/icon/layout/search.svg" alt="搜尋" />
        </button>
        <button type="button" class="w-5">
          <img src="~/assets/icon/layout/message.svg" alt="訊息中心" />
        </button>
      </div>
    </header>
    <div class="h-14"></div>
    <nuxt />
    <div class="h-18" />
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'LayoutMember',
  middleware: 'layoutMember',
}
</script>
