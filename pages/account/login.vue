<template>
  <div>
    <form @submit.prevent="$validateFunctions.userLogin(login)">
      <AccountAcctInput v-model="login.account" />
      <AccountPwdInput v-model="login.password" field="password" />
      <NuxtLink
        to="/account/forgetPassword"
        class="block w-fit ml-auto mb-8 underline"
      >
        忘記密碼了嗎?
      </NuxtLink>
      <button class="account__btn mb-4" type="submit">登入</button>
      <div class="line--divide flex justify-center items-center mb-4">
        <p class="px-2 bg-white text-base">或</p>
      </div>
      <NuxtLink
        to="/account/register"
        class="account__btn bg-white border border-yellow"
      >
        立即註冊
      </NuxtLink>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'account',
  data() {
    return {
      login: {
        account: '',
        password: '',
      },
      isValidated: {
        account: '',
        password: '',
      },
    }
  },
}
</script>

<style scoped>
.line--divide::before,
.line--divide::after {
  content: '';
  @apply block w-20 h-px bg-gray-300;
}
</style>
