<template>
  <main class="mt-6 mx-6 mb-20">
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
  data() {
    return {
      orders: [
        {
          bookId: 1,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 103856820,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 2,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 103822220,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 3,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 103856821,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 4,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 144456822,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 5,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 703856823,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 6,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 663856824,
          time: '2021-08-01',
          price: 350,
          pay: '信用卡',
          status: '已完成',
        },
        {
          bookId: 7,
          imgSrc: 'sampleBook.jpg',
          name: '素養閱讀',
          orderNumber: 103856925,
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
