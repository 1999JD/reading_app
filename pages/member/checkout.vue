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
          <label class="block mb-4">
            <span>會員帳號</span>
            <input type="text" placeholder="登入本會員使用的帳號" />
          </label>
          <label class="block mb-4">
            <span>姓名</span>
            <input type="text" placeholder="林大一" />
          </label>
          <label class="block mb-4">
            <span> 手機 </span>
            <input type="number" placeholder="0912345678" />
          </label>
          <label class="block mb-10">
            <span>信箱</span>
            <input type="email" placeholder="sample@reading.com.tw" />
          </label>
        </fieldset>
        <fieldset>
          <MemberReceiptTitle>付款方式</MemberReceiptTitle>
          <div class="relative mb-9">
            <button class="absolute inset-y-0 right-2 w-5 m-auto">
              <img src="~/assets/icon/common/downArrow.svg" alt="" />
            </button>
            <select name="" class="w-full p-2 text-sm appearance-none">
              <option value="" disabled selected hidden>請選擇</option>
              <option value="">現金</option>
              <option value="">電子</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <MemberReceiptTitle>發票資訊 </MemberReceiptTitle>
          <div class="grid grid-cols-2 mb-4">
            <label class="flex items-center">
              <input type="radio" class="mr-1" name="receipt" />
              <span>個人(兩聯式)</span>
            </label>
            <label class="flex items-center">
              <input type="radio" class="mr-1" name="receipt" />
              <span> 公司(三聯式) </span>
            </label>
          </div>
          <label class="block mb-4">
            <span>姓名或公司名稱</span>
            <input type="text" />
          </label>
          <label class="block mb-4">
            <span>統一編號</span>
            <input type="number" />
          </label>
          <h4 class="mb-4">送貨地址</h4>
          <div class="grid grid-cols-2">
            <label class="flex items-center mb-4">
              <input type="radio" class="mr-1" name="address" />
              <span>台灣</span>
            </label>
            <label class="flex">
              <input type="radio" class="mr-1" name="address" />
              <span>非台灣</span>
            </label>
          </div>
          <div class="grid grid-cols-2 gap-x-7 mb-4 justify-items-stretch">
            <label class="block">
              <span>縣市選擇</span>
              <select name="" class="w-full py-1.5 px-4 rounded">
                <option value="" disabled selected hidden>請選擇</option>
                <option value="台北">台北</option>
                <option value="台中">台中</option>
                <option value="高雄">高雄</option>
              </select>
            </label>
            <label class="block">
              <span>鄉鎮選擇</span>
              <select name="" class="w-full py-1.5 px-4 rounded">
                <option value="" disabled selected hidden>請選擇</option>
                <option value="大安區">大安</option>
                <option value="東區">東區</option>
                <option value="美濃">美濃</option>
              </select>
            </label>
          </div>
          <input type="text" placeholder="輸入詳細地址" class="mb-4" />
          <ContentSelectBox v-model="selectValue" :select-value="selectValue" />
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
      selectValue: 'default',
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

<style scoped>
label span {
  @apply block mb-1;
}
input[type='text'],
input[type='number'],
input[type='email'] {
  @apply w-full py-2 px-4 text-sm rounded focus:outline-none;
}

option {
  @apply py-2 p-4 border-b border-gray-divide;
}

option::before {
  content: '>';
  font-size: 20px;
  display: none;
  background: purple;
  color: #fff;
}

option:hover::before {
  display: inline;
}
</style>
