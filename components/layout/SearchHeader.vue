<template>
  <div>
    <header
      :class="[
        open ? 'shadow-md' : '',
        'flex justify-center fixed z-20 w-full bg-primary transition delay-100',
      ]"
    >
      <button
        type="button"
        class="absolute top-0 bottom-0 left-6"
        @click.prevent="open = !open"
      >
        <SvgHeaderHam />
      </button>
      <label class="relative block w-full mx-16 p-2.5">
        <input type="text" class="w-full pl-8 py-1.5 rounded-lg leading-none" />
        <button type="button" class="absolute top-0 bottom-0 left-5">
          <SvgHeaderSearch />
        </button>
      </label>
      <button
        type="button"
        class="absolute top-0 bottom-0 my-auto right-6"
        @click="$router.push('/member/cart')"
      >
        <p
          class="
            absolute
            top-1
            left-3
            px-2
            py-1
            rounded-full
            bg-yellow
            text-2xs text-white
          "
        >
          {{ shoppingList.length }}
        </p>
        <SvgHeaderCart />
      </button>
    </header>

    <transition :name="open ? 'open' : 'close'">
      <LayoutSideBar v-show="open" @onClick="handleCloseSidebar" />
    </transition>
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
