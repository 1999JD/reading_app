<template>
  <li class="record mt-6 mb-6 p-4 bg-primary rounded">
    <div class="flex mb-1.5 py-1.5 px-3 bg-white rounded">
      <div class="flex-shrink-0 w-20 h-24 mr-6 bg-gray-300">
        <img
          :src="require(`~/assets/img/${orderData.imgSrc}`)"
          :alt="orderData.name"
          @click="$router.push(`/content/ebook/${orderData.bookId}`)"
        />
      </div>
      <ul>
        <li class="flex mb-4">
          <h3 class="mr-10">商品名稱</h3>
          <p class="text-center flex-grow">{{ orderData.name }}</p>
        </li>
        <li class="flex mb-4">
          <h3 class="mr-10">訂單編號</h3>
          <p class="text-center flex-grow text-gray-order">
            {{ orderData.orderNumber }}
          </p>
        </li>
        <li class="flex mb-4">
          <h3 class="mr-10">訂購時間</h3>
          <p class="text-center flex-grow text-gray-order">
            {{ orderData.time }}
          </p>
        </li>
      </ul>
    </div>
    <div class="bg-white pt-2 pb-3 px-1.5 text-center">
      <ul class="grid grid-cols-3">
        <li class="">
          <h3 class="mb-3">訂單金額</h3>
          <p class="text-tangerine">${{ orderData.price }}</p>
        </li>
        <li class="decoration relative">
          <h3 class="mb-3">付款方式</h3>
          <p class="text-tangerine">{{ orderData.pay }}</p>
        </li>
        <li class="decoration relative">
          <h3 class="mb-3">訂單狀態</h3>
          <p class="text-tangerine">{{ orderData.status }}</p>
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
  @apply block absolute -left-0.5 top-0 bottom-0 w-0.5 h-6 my-auto bg-primary;
}
</style>
