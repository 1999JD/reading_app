<template>
  <div class="mt-8 mb-32 mx-6 px-6 py-5 bg-gray-memberbg">
    <form>
      <MemberReceiptTitle> 訂閱方案 </MemberReceiptTitle>
      <label class="flex items-center mb-4"
        ><input type="radio" class="mr-1" name="plan" />
        <span> 月訂閱：150元（每月自動扣款） </span>
      </label>
      <label class="flex items-center mb-4">
        <input type="radio" class="mr-1" name="plan" />
        <span> 季訂閱：800元（每3個月自動扣款） </span>
      </label>
      <label class="flex mb-6"
        ><input type="radio" class="mr-1" name="plan" />
        <span> 年訂閱：1,500元（12個月一次付清） </span>
      </label>
      <h4 class="mb-3">用戶類型</h4>
      <div class="flex">
        <label class="flex items-center mb-4 mr-6">
          <input type="radio" class="mr-1" name="identity" />
          <span> 個人 </span>
        </label>
        <label class="flex items-center mb-4">
          <input type="radio" class="mr-1" name="identity" />
          <span> 公司 </span>
        </label>
      </div>
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
      <h4 class="mb-4">發票寄送地址</h4>
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
          <select name="" class="w-full py-2 px-4">
            <option value="台北">台北</option>
            <option value="台中">台中</option>
            <option value="高雄">高雄</option>
          </select>
        </label>
        <label class="block">
          <span>鄉鎮選擇</span>
          <select name="" class="w-full py-2 px-4">
            <option value="大安區">大安</option>
            <option value="東區">東區</option>
            <option value="美濃">美濃</option>
          </select>
        </label>
      </div>
      <input type="text" placeholder="輸入詳細地址" class="mb-4" />
      <p class="mb-12 text-quote text-center leading-normal">
        *依統一發票使用辦法規定：個人發票一經開立，不得任意更改或改開公司戶發票。
      </p>
      <button
        class="
          block
          w-44
          mx-auto
          mb-5
          py-2.5
          bg-highlight
          rounded-2.5xl
          shadow-btn-pay
        "
      >
        立即付款
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubReceipt',
  layout: 'member',
  data() {
    return {}
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
  @apply w-full py-2 px-4 text-sm rounded;
}
</style>
