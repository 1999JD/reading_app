<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="
        flex
        justify-center
        items-center
        relative
        z-10
        bg-primary
        transition
        delay-100
      "
    >
      <NuxtLink
        to="/content"
        class="
          absolute
          left-6
          top-0
          bottom-0
          m-auto
          w-6
          h-6
          bg-white
          rounded-full
        "
      >
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
      </NuxtLink>
      <label for="" class="relative p-3">
        <input
          type="text"
          name=""
          value=""
          placeholder="內文搜尋"
          class="w-full pl-8 py-1.5 rounded-lg leading-none"
        />
        <button type="button" class="absolute top-0 bottom-0 left-3">
          <img src="~/assets/icon/layout/search.svg" alt="送出按鈕" />
        </button>
      </label>
      <button type="button" class="absolute top-0 bottom-0 my-auto right-6">
        <img src="~/assets/icon/layout/message.svg" alt="訊息中心" />
      </button>
    </header>
    <NuxtChild
      :setting-open="settingOpen"
      @onClickSetting="handleOpenSetting"
    />
    <LayoutEbookFooterNav @onClickSetting="handleOpenSetting" />
  </div>
</template>

<script>
export default {
  name: 'Ebook',
  data() {
    return {
      settingOpen: false,
    }
  },
  methods: {
    handleOpenSetting() {
      this.settingOpen = !this.settingOpen
    },
  },
}
</script>
