<template>
  <div class="">
    <LayoutSearchHeader />
    <header class="fixed z-20 top-0"></header>
    <div class="h-13"></div>
    <Nuxt />
    <div class="h-18"></div>
    <footer class="fixed bottom-0 w-full  bg-white shadow-md">
      <div class="flex justify-between mx-10 my-2">
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
  name: 'DefaultLayout',
}
</script>