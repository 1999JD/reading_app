<template>
  <div>
    <div class="banner box-border h-82 bg-primary"></div>
    <div class="relative -top-33 px-6">
      <h2 class="mb-3 text-2xl font-medium">
        {{ $store.state.heading }}
      </h2>
      <main class="rounded-lg min-h-account-main py-10 px-8 shadow-md bg-white">
        <nuxt />
      </main>
    </div>

    <footer class="fixed bottom-0 w-full bg-white shadow-md">
      <div class="flex justify-between mx-10 my-2 text-center">
        <NuxtLink class="flex flex-col justify-center" to="/content">
          <SvgFooterBook class="mb-2" /> 書城
        </NuxtLink>
        <NuxtLink class="flex flex-col justify-center" to="/">
          <SvgFooterHome class="mb-2" /> 首頁
        </NuxtLink>
        <NuxtLink class="flex flex-col justify-center" to="/member">
          <SvgFooterMember class="mb-2" /> 我的
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  middleware: 'layoutContent',
}
</script>

<style scoped>
.banner {
  background-image: url('~/assets/img/account-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
