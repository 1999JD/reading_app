<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 bg-gray-mask text-center">
    <section class="modal">
      <div class="bg-white py-6">
        <div class="w-10 mx-auto mb-1">
          <img src="~/assets/icon/account/check-big.svg" alt="" />
        </div>
        <p class="mb-5 text-quote text-lg font-medium">註冊成功</p>
        <p>歡迎使用千碩素養APP</p>
      </div>
      <button
        class="block w-full py-4 bg-highlight"
        @click.prevent="$emit('onHandleModalOpen')"
      >
        確定
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style scoped>
.modal {
  @apply fixed top-6 bottom-24 left-6 right-6 max-w-account-modal h-fit m-auto rounded-2.5xl overflow-hidden;

  max-height: calc(100vh - 48px);
}
</style>
