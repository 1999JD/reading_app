<template>
  <li class="record mb-6 p-4 bg-primary">
    <div class="flex mb-1.5 py-1.5 px-3 bg-white">
      <div class="w-20 h-24 mr-6 bg-gray-300">
        <img :src="require(`~/assets/icon/home.svg`)" :alt="orderData.name" />
      </div>
      <ul>
        <li class="flex">
          <h3 class="">商品名稱</h3>
          <p>{{ orderData.name }}</p>
        </li>
        <li class="flex">
          <h3 class="mb-4">訂單編號</h3>
          <p>
            {{ orderData.orderNumber }}
          </p>
        </li>
        <li class="flex">
          <h3 class="mb-4">訂購時間</h3>
          <p>{{ orderData.time }}</p>
        </li>
      </ul>
    </div>
    <div class="bg-white">
      <ul class="grid grid-cols-3">
        <li class="">
          <h3>訂單金額</h3>
          <p>{{ orderData.price }}</p>
        </li>
        <li class="decoration relative">
          <h3>付款方式</h3>
          <p>{{ orderData.pay }}</p>
        </li>
        <li class="decoration relative">
          <h3>訂單狀態</h3>
          <p>{{ orderData.status }}</p>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Record',
  props: {
    orderData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.decoration::before {
  content: '';
  @apply block absolute -left-0.5 top-0 bottom-0 w-0.5 h-6 my-auto bg-gray-700;
}
</style>
