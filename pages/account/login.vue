<template>
  <div class="pb-12">
    <form @submit.prevent="userLogin">
      <AccountAcctInput v-model="login.account" />
      <AccountPwdInput v-model="login.password" filed="password" />
      <NuxtLink
        to="/account/forgetPassword"
        class="block w-fit ml-auto mb-8 underline"
        >忘記密碼了嗎?</NuxtLink
      >
      <button class="account__btn mb-9" type="submit">登入</button>
      <div class="line--divide flex justify-center items-center mb-7.5">
        <p class="px-2 bg-white text-base">或</p>
      </div>
      <NuxtLink
        to="/account/register"
        class="account__btn bg-white border border-highlight"
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
  middleware({ store, redirect }) {
    if (store.state.auth.loggedIn) {
      if (typeof window !== 'undefined') {
        alert('您已經登入!')
      }
      redirect('/')
    }
  },
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
  methods: {
    userLogin() {
      this.error = null
      return this.$auth
        .loginWith('local', {
          data: {
            userInfo: this.login,
          },
        })
        .then((res) => {
          if (res.data.token) {
            this.$auth.setUser(res.data.userInfo)
            if (this.$auth.loggedIn) this.$router.push('/member')
            else alert('出現錯誤，無法登入')
          }
        })
        .catch((_err) => {
          alert('出現錯誤，無法登入')
          this.$router.push('/account/login')
        })
    },
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
