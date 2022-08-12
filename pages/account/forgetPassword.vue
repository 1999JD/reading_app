<template>
  <div>
    <form>
      <AccountAcctInput v-model="login.account" class="mb-8" />
      <button
        :class="[
          'account__btn mb-10',
          hasSent ? 'text-white bg-yellow border-yellow' : '',
        ]"
        :disabled="login.account === ''"
        @click.prevent="sentAccount"
      >
        發送新密碼 ({{ count }})
      </button>
      <div v-show="show">
        <AccountPwdInput
          v-model="login.password"
          class="mb-10"
          field="password"
        >
          <template #label>輸入信箱預設密碼</template>
        </AccountPwdInput>
        <button
          class="account__btn"
          @click.prevent="$validateFunctions.userLogin(login)"
        >
          登入
        </button>
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
      show: false,
      login: {
        account: '',
        password: '',
      },
    }
  },
  methods: {
    async sentAccount() {
      if (
        await this.$validateFunctions.inputValidate(
          'account',
          this.login.account
        )
      ) {
        // 如果驗證沒過
        alert('格式不對，請確認後重填')
        return false
      }
      if (this.hasSent) return
      this.show = true
      this.hasSent = !this.hasSent
      const counter = setInterval(() => {
        this.count--
        if (this.count === 0) {
          clearInterval(counter)
          this.hasSent = !this.hasSent
          this.count = 30
        }
      }, 1000)
    },
  },
}
</script>
<style scoped>
button:disabled {
  @apply bg-white text-gray-300;
}
</style>
