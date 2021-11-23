<template>
  <div>
    <div class="box-border h-82 bg-primary"></div>
    <div class="relative -top-33 px-6">
      <h2 class="mb-3 text-2xl font-medium">
        {{ $store.state.heading }}
      </h2>
      <main
        class="
          rounded-2lg
          min-h-account-main
          pt-10
          px-8
          shadow-account-main
          bg-white
        "
      >
        <nuxt />
      </main>
    </div>
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'Auth',
  middleware: 'layoutAccount',
}
</script>
