<template>
  <div class="test__question__wrap">
    <div class="test__question__avatar">
      <img src="~/assets/img/tkb.png" alt="" />
    </div>
    <div class="test__question__bubble p-7.5 text-base text-center">
      <p class="mb-3">{{ total }}/{{ total }}</p>
      <p class="mb-4">您已完成作答</p>
      <p class="mb-1.5">進一步查看結果吧!</p>
      <div class="relative right-3 block w-11 ml-auto">
        <img src="~/assets/img/test-btn-decoration.png" alt="" />
      </div>
      <button
        class="result__check block w-52 mx-auto mb-4 py-2 shadow-md rounded-2xl"
      >
        查看結果
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestEndBubble',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.result__check {
  background-color: #a5cef3;
  box-shadow: 0 2px 4px rgba(68, 68, 68, 0.25);
}
</style>
