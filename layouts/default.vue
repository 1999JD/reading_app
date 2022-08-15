<template>
  <div class="">
    <LayoutSearchHeader
      v-if="$route.name === 'index' || $route.name === 'content'"
    />
    <div v-else-if="$route.name === 'member'" style="margin-top: -52px"></div>
    <LayoutBackHeader v-else />
    <div class="h-13"></div>
    {{ error }}
    <Nuxt />
    <div class="h-18"></div>
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
  name: 'DefaultLayout',
  middleware: 'layoutContent',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>