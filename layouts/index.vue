<template>
  <div>
    <header
      :class="[
        open ? 'shadow-md' : '',
        'flex justify-center fixed z-10 w-full bg-primary transition delay-100',
      ]"
    >
      <button
        type="button"
        class="absolute inline-block top-0 bottom-0 my-auto left-6"
        @click.prevent="open = !open"
      >
        <img src="~/assets/icon/layout/ham.svg" alt="漢堡選單" />
      </button>
      <label for="" class="relative p-2.5">
        <input
          type="text"
          name=""
          value=""
          class="w-full pl-8 py-1.5 rounded-lg leading-none"
        />
        <button type="button" class="absolute top-0 bottom-0 left-3">
          <img src="~/assets/icon/layout/search.svg" alt="送出按鈕" />
        </button>
      </label>
      <button
        type="button"
        class="absolute top-0 bottom-0 my-auto right-6"
        @click="$router.push('/member/cart')"
      >
        <span class="absolute top-1 w-4 h-4 bg-highlight rounded-full">
          {{ shoppingList.length }}
        </span>
        <img src="~/assets/icon/layout/cart.svg" alt="購物車" />
      </button>
    </header>

    <transition :name="open ? 'open' : 'close'">
      <LayoutSideBar v-show="open" @onClick="handleCloseSidebar" />
    </transition>
    <div class="h-13"></div>
    <nuxt />
    <div class="h-18" />
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      open: false,
    }
  },
  computed: {
    shoppingList() {
      return this.$store.state.shoppingList
    },
  },
  methods: {
    handleCloseSidebar() {
      this.open = false
    },
  },
}
</script>

<style scoped>
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
