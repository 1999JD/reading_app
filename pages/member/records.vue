<template>
  <main class="px-4">
    <ul>
      <MemberRecord
        v-for="order in orders"
        :key="order.orderNumber"
        :order-data="order"
      />
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Records',
  layout: 'member',
  data() {
    return {
      orders: [
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856820,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856820,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856821,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856822,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856823,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856824,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
        {
          imgSrc: '',
          name: '素養閱讀',
          orderNumber: 103856825,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '完成',
        },
      ],
    }
  },
}
</script>
