<template>
  <main class="pt-4 px-6 pb-20">
    <section class="mb-2 border border-gray-memberbg rounded overflow-hidden">
      <h3 class="mb-7.5 py-2 bg-gray-memberbg text-center">訂單資訊</h3>
      <ul class="mx-4 border-b border-gray-divide">
        <li
          v-for="item in shoppingList"
          :key="item.bookId"
          class="flex gap-1.5 mb-6 p-2 bg-gray-memberbg rounded-lg"
        >
          <div class="flex-grow-0 flex-shrink-0 w-13">
            <img :src="require(`~/assets/img/${item.imgSrc}`)" alt="" />
          </div>
          <div>
            <h3 class="mb-1.5 font-medium line-clamp-1">{{ item.name }}</h3>
            <p class="mb-1.5 text-xs">作者：{{ item.author }}</p>
            <p class="">${{ item.price }}</p>
          </div>
        </li>
      </ul>
      <dl class="w-fit ml-auto mr-4 pt-4 pb-3">
        <div class="flex justify-between mb-3">
          <dt class="w-18">商品數量</dt>
          <dd class="text-quote font-medium">{{ shoppingList.length }}</dd>
        </div>
        <div class="flex gap-4">
          <dt class="w-18">訂購總金額</dt>
          <dd class="text-quote font-medium">${{ sum }}</dd>
        </div>
      </dl>
      <button class="ml-4 mb-4 text-quote underline">使用優惠券</button>
    </section>
    <section class="mb-8 px-6 py-3 bg-gray-memberbg">
      <form>
        <fieldset>
          <MemberReceiptTitle>訂購人資訊 </MemberReceiptTitle>
          <label class="checkout__wrap">
            <span class="checkout__label">會員帳號</span>
            <input
              type="text"
              class="checkout__input"
              placeholder="登入本會員使用的帳號"
            />
          </label>
          <label class="checkout__wrap">
            <span class="checkout__label">姓名</span>
            <input type="text" class="checkout__input" placeholder="林大一" />
          </label>
          <label class="checkout__wrap">
            <span class="checkout__label">手機</span>
            <input
              type="text"
              class="checkout__input"
              placeholder="0912345678"
            />
          </label>
          <label class="block mb-10">
            <span class="checkout__label">信箱</span>
            <input
              type="email"
              class="checkout__input"
              placeholder="sample@reading.com.tw"
            />
          </label>
        </fieldset>
        <fieldset class="mb-10">
          <MemberReceiptTitle>付款方式</MemberReceiptTitle>
          <ContentSelectBox
            v-model="paymentValue"
            :select-value="paymentValue"
            :options="paymentOptions"
          />
        </fieldset>
        <fieldset>
          <MemberReceiptTitle>發票資訊 </MemberReceiptTitle>
          <div class="grid grid-cols-2 mb-4">
            <label class="flex items-center">
              <input type="radio" class="checkout__radio" name="receipt" />
              <span class="checkout__label">個人(兩聯式)</span>
            </label>
            <label class="flex items-center">
              <input type="radio" class="checkout__radio" name="receipt" />
              <span class="checkout__label"> 公司(三聯式) </span>
            </label>
          </div>
          <label class="checkout__wrap">
            <span class="checkout__label">姓名或公司名稱</span>
            <input type="text" class="checkout__input" />
          </label>
          <label class="checkout__wrap">
            <span class="checkout__label">統一編號</span>
            <input type="text" class="checkout__input" />
          </label>
          <h4 class="mb-4">送貨地址</h4>
          <div class="grid grid-cols-2">
            <label class="flex items-center mb-4">
              <input type="radio" class="checkout__radio" name="address" />
              <span class="checkout__label">台灣</span>
            </label>
            <label class="flex">
              <input type="radio" class="checkout__radio" name="address" />
              <span class="checkout__label">非台灣</span>
            </label>
          </div>
          <div class="grid grid-cols-2 gap-x-7 mb-4 justify-items-stretch">
            <label class="block">
              <span class="checkout__label">縣市選擇</span>
              <ContentSelectBox
                v-model="countyValue"
                placeholder="請選擇"
                :select-value="countyValue"
                :options="countyOptions"
              />
            </label>
            <label class="block">
              <span class="checkout__label">鄉鎮選擇</span>
              <ContentSelectBox
                v-model="districtValue"
                placeholder="請選擇"
                :select-value="districtValue"
                :options="districtOptions"
              />
            </label>
          </div>
          <input
            type="text"
            class="checkout__input"
            placeholder="輸入詳細地址"
          />
        </fieldset>
      </form>
    </section>
    <button
      class="block w-44 mx-auto mb-18 py-3 text-center bg-highlight rounded"
    >
      立即付款
    </button>
  </main>
</template>

<script>
export default {
  name: 'Checkout',
  layout: 'member',
  data() {
    return {
      paymentValue: '',
      paymentOptions: [
        { label: '線上刷卡', input: 'cash' },
        { label: 'LINEPAY', input: 'linepay' },
        { label: 'ATM轉帳', input: 'atm' },
        { label: '現金(臨櫃)', input: 'cash' },
      ],
      countyValue: '',
      countyOptions: [
        { label: '高雄', input: '高雄' },
        { label: '台北', input: '台北' },
      ],
      districtValue: '',
      districtOptions: [
        { label: '新莊', input: '新莊' },
        { label: '三重', input: '三重' },
      ],
    }
  },
  computed: {
    shoppingList() {
      return this.$store.state.billList
    },
    sum() {
      if (this.shoppingList.length <= 0) return 0
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue
      const priceArr = this.shoppingList.map((item) => item.price)
      return priceArr.reduce(reducer)
    },
  },
}
</script>
