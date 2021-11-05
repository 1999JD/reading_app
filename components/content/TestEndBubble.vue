<template>
  <div class="test__question__wrap">
    <div class="test__question__avatar">
      <img src="~/assets/img/tkb.png" alt="" />
    </div>
    <div class="test__question__bubble p-7.5 text-base text-center">
      <p class="mb-3">10/10</p>
      <p class="mb-4">您已完成作答</p>
      <p class="mb-1.5">進一步查看結果吧!</p>
      <div class="relative right-3 block w-11 ml-auto">
        <img src="~/assets/img/test-btn-decoration.png" alt="" />
      </div>
      <button
        class="result__check block w-full py-2 shadow-content rounded-2.5xl"
      >
        查看結果
      </button>
    </div>
  </div>
</template>

<style scoped>
.result__check {
  background-color: #a5cef3;
  box-shadow: 0 2px 4px rgba(68, 68, 68, 0.25);
}
</style>
