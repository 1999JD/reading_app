<template>
  <div>
    <form action="">
      <label class="account-label mb-8">
        <span class="account-span">帳號</span>
        <input class="account-input" type="text" />
      </label>
      <button
        :class="['account-btn mb-10', hasSent ? 'text-white' : '']"
        @click.prevent="sentNewPassword"
      >
        發送新密碼 ({{ count }})
      </button>
      <div v-show="hasSent">
        <label class="account-label mb-13">
          <span class="account-span"> 輸入信箱預設密碼 </span>
          <input class="account-input" type="password" />
        </label>
        <button class="account-btn">登入</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassword',
  layout: 'account',
  data() {
    return {
      count: 30,
      hasSent: false,
    }
  },
  methods: {
    sentNewPassword() {
      this.hasSent = !this.hasSent
    },
  },
}
</script>
