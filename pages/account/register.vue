<template>
  <div class="pb-21.5">
    <form action="">
      <label class="account-label">
        <span class="account-span">帳號</span>
        <div>
          <input class="account-input" type="text" />
        </div>
      </label>
      <label class="account-label">
        <span class="account-span">設定密碼</span>
        <div class="relative">
          <input class="account-input" type="password" />
          <button class="absolute">
            <img src="" alt="" />
          </button>
        </div>
      </label>
      <div class="mb-8">
        <label class="account-label mb-3">
          <span class="account-span">確認密碼</span>
          <div class="relatvie">
            <input class="account-input" type="text" />
            <button class="absolute">
              <img src="" alt="" />
            </button>
          </div>
        </label>
        <p class="mb-3 text-quote">長度為 8 - 15 位字元</p>
        <p class="mb-3 text-quote">包含英文字母大寫與小寫</p>
        <p class="mb-3 text-quote">包含一個數字</p>
      </div>
      <button class="account-btn">確認註冊</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'account',
}
</script>
