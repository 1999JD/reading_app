<template>
  <div class="wrap">
    <nuxt />
    <LayoutFooter />
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

.wrap {
  padding-bottom: 72px;
}
</style>
