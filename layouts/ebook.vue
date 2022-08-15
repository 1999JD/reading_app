<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-center items-center fixed z-20 w-full bg-primary"
    >
      <a
        class="
          self-center
          absolute
          left-6
          top-0
          bottom-0
          w-6
          h-fit
          m-auto
          bg-white
          rounded-full
        "
        @click.prevent="$router.go(-1)"
      >
        <img src="~/assets/icon/common/leftArrow.svg" alt="返回按鈕" />
      </a>
      <label class="relative block w-full mx-16 p-2.5">
        <input
          type="text"
          class="w-full pl-8 py-1.5 rounded-lg leading-none"
          placeholder="搜尋內文"
        />
        <button type="button" class="absolute top-0 bottom-0 left-5">
          <SvgHeaderSearch />
        </button>
      </label>
      <button type="button" class="absolute top-0 bottom-0 my-auto right-6">
        <img src="~/assets/icon/layout/message.svg" alt="訊息中心" />
      </button>
    </header>
    <div class="h-13"></div>

    <NuxtChild
      :setting-open="settingOpen"
      :catalog-open="catalogOpen"
      :pen-use="penUse"
      @onClickSetting="handleOpenSetting"
      @onClickCatalog="handleOpenCatalog"
      @onClickPen="handleUsePen"
    />
    <div class="h-18"></div>

    <LayoutEbookFooterNav
      @onClickSetting="handleOpenSetting"
      @onClickCatalog="handleOpenCatalog"
      @onClickPen="handleUsePen"
    />
  </div>
</template>

<script>
export default {
  name: 'Ebook',
  data() {
    return {
      settingOpen: false,
      catalogOpen: false,
      penUse: false,
    }
  },
  methods: {
    handleOpenSetting() {
      this.settingOpen = !this.settingOpen
      this.catalogOpen = false
      this.penUse = false
    },
    handleOpenCatalog() {
      this.catalogOpen = !this.catalogOpen
      this.settingOpen = false
      this.penUse = false
    },
    handleUsePen() {
      this.penUse = !this.penUse
      this.settingOpen = false
      this.catalogOpen = false
    },
  },
}
</script>
