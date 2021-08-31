<template>
  <div>
    <header
      :class="[
        open ? 'shadow-md' : '',
        'flex justify-center relative z-10 bg-primary transition delay-100',
      ]"
    >
      <button
        type="button"
        class="absolute top-0 bottom-0 my-auto left-6"
        @click.prevent="open = !open"
      >
        <img src="" alt="漢堡選單" />
      </button>
      <label for="" class="relative p-2.5">
        <input
          type="text"
          name=""
          value=""
          class="w-full pl-8 py-1.5 rounded-lg leading-none"
        />
        <button type="button" class="absolute top-0 bottom-0 left-3">
          <img src="" alt="送出按鈕" />
        </button>
      </label>
      <button type="button" class="absolute top-0 bottom-0 my-auto right-6">
        <img src="" alt="訊息中心" />
      </button>
    </header>

    <transition :name="open ? 'open' : 'close'">
      <LayoutSideMenu v-show="open" />
    </transition>
    <nuxt />

    <footer
      class="
        flex
        justify-between
        fixed
        bottom-0
        z-10
        w-full
        px-10
        bg-white
        shadow-sm
        filter
        drop-shadow-md
      "
    >
      <CommonIconWithText class="py-2">書城</CommonIconWithText>
      <CommonIconWithText class="py-2">首頁</CommonIconWithText>
      <CommonIconWithText class="py-2">我的</CommonIconWithText>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style>
label {
  box-sizing: border-box;
  width: 17.875rem;
}

.open-enter-active,
.open-leave-active,
.close-enter-active,
.close-leave-active {
  transition: left 0.5s;
}

.open-enter,
.open-leave-to {
  left: -100%;
}

.open-enter-to,
.open-leave {
  left: 0;
}

.close-enter,
.close-leave-to {
  left: -100%;
}

.close-enter-to,
.close-leave {
  left: 0;
}
</style>
