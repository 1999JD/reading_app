<template>
  <div>
    <form action="">
      <label class="account__label mb-8">
        <span class="account__span">帳號</span>
        <input
          v-model="verify.account"
          class="field__acount account__input"
          type="text"
          placeholder="example@mail.com"
        />
      </label>
      <button
        :class="['account__btn mb-10', hasSent ? 'text-white' : '']"
        :disabled="verify.account === ''"
        @click.prevent="sentNewPassword"
      >
        發送新密碼 ({{ count }})
      </button>
      <div v-show="hasSent">
        <label class="account__label mb-13">
          <span class="account__span"> 輸入信箱預設密碼 </span>
          <AccountPwdInputWrap v-slot="{ eyeOpen }">
            <input
              v-model="verify.password"
              class="account__input"
              :type="eyeOpen ? 'text' : 'password'"
              placeholder="至少8位字元、英文字母大小寫與數字"
            />
          </AccountPwdInputWrap>
        </label>
        <button class="account__btn">登入</button>
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
      verify: {
        account: '',
        password: '',
      },
    }
  },
  methods: {
    sentNewPassword() {
      this.hasSent = !this.hasSent
    },
  },
}
</script>

<style scoped>
button:disabled {
  @apply bg-white text-gray-accountPlaceholder border-gray-accountInput;
}
</style>
