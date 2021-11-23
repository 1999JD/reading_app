<template>
  <main class="mt-6 mb-28 px-4">
    <div class="title flex items-center mb-5">
      <h2 class="px-3 text-center text-xl font-medium">訂閱方案</h2>
    </div>
    <ul class="pt-5 pb-4 bg-gray-memberbg">
      <li
        v-for="plan in plans"
        :key="plan.title"
        class="
          w-60
          mx-auto
          mb-6
          text-center
          rounded-lg
          overflow-hidden
          filter
          drop-shadow-card
        "
      >
        <div
          class="py-4 text-white"
          :style="{ 'background-color': plan.bgColor }"
        >
          <h3 class="mb-4 text-xl">{{ plan.title }}</h3>
          <p class="text-3.5xl">
            ${{ plan.price }}/<span class="text-base"> {{ plan.unit }}</span>
          </p>
        </div>
        <div class="bg-white p-4 pb-6">
          <p class="mb-4 leading-normal">{{ plan.desc }}</p>
          <NuxtLink
            to="/member/orderReceipt"
            class="
              block
              w-44
              py-2.5
              mx-auto
              bg-primary
              shadow-btn
              rounded-2.5xl
            "
          >
            訂閱
          </NuxtLink>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Orders',
  layout: 'member',
  data() {
    return {
      plans: [
        {
          title: '月訂閱',
          price: 150,
          unit: '月',
          desc: '原價$225。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
          bgColor: '#E8746E',
        },
        {
          title: '季訂閱',
          price: 800,
          unit: '季',
          desc: '原價$900。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
          bgColor: '#FFC651',
        },
        {
          title: '年訂閱',
          price: 1500,
          unit: '年',
          desc: '原價$2,200。多元說書內容任您看。內容大綱簡介內容大綱簡介內容大綱簡介',
          bgColor: '#6AD8D8',
        },
      ],
    }
  },
}
</script>

<style scoped>
.title::before,
.title::after {
  content: '';
  flex-grow: 1;
  height: 2px;
  background-color: #e8e8e8;
}
</style>
