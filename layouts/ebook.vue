<template>
  <div>
    <header
      class="flex justify-center relative z-10 bg-primary transition delay-100"
    >
      <NuxtLink to="/content" class="absolute left-6 top-0 bottom-0 m-auto">
        <img src="~/assets/icon/backArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <label for="" class="relative p-2.5">
        <input
          type="text"
          name=""
          value=""
          class="w-full pl-8 py-1.5 rounded-lg leading-none"
        />
        <button type="button" class="absolute top-0 bottom-0 left-3">
          <img src="~/assets/icon/search.svg" alt="送出按鈕" />
        </button>
      </label>
      <button type="button" class="absolute top-0 bottom-0 my-auto right-6">
        <img src="~/assets/icon/message.svg" alt="訊息中心" />
      </button>
    </header>
    <nuxt />
    <LayoutEbookFooter />
  </div>
</template>

<script>
export default {
  name: 'Ebook',
}
</script>
