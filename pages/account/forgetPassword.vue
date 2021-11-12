<template>
  <div>
    <form action="">
      <AccountAcctInput v-model="verify.account" class="mb-8" />
      <button
        :class="['account__btn mb-10', hasSent ? 'text-white' : '']"
        :disabled="verify.account === ''"
        @click.prevent="sentNewPassword"
      >
        發送新密碼 ({{ count }})
      </button>
      <div v-show="hasSent">
        <AccountPwdInput v-model="verify.password" class="mb-10">
          <template #label>輸入信箱預設密碼</template>
        </AccountPwdInput>
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
