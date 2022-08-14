<template>
  <header
    class="flex justify-center items-center fixed z-20 w-full bg-primary py-4"
  >
    <a
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
      @click="$router.go(-1)"
    >
      <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
    </a>
    <p class="text-base leading-5 font-medium">
      {{ $store.state.heading }}
    </p>
  </header>
</template>

<script>
export default {
  name: 'BackHeader',
}
</script>