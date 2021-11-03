<template>
  <div class="pb-12">
    <form>
      <label class="account-label">
        <span class="account-span">帳號</span>
        <input
          v-model="login.username"
          class="account-input"
          type="text"
          placeholder="example@mail.com"
        />
      </label>
      <div class="mb-8">
        <label class="account-label mb-3">
          <span class="account-span">密碼</span>
          <AccountPwdInputWrap v-slot="{ eyeOpen }">
            <input
              v-model="login.password"
              class="account-input"
              :type="eyeOpen ? 'text' : 'password'"
              placeholder="至少8位字元、英文字母大小寫與數字"
            />
          </AccountPwdInputWrap>
        </label>
        <NuxtLink
          to="/account/forgetPassword"
          class="block w-fit ml-auto underline"
          >忘記密碼了嗎?</NuxtLink
        >
      </div>

      <button class="account-btn mb-9" type="submit" @click="userLogin">
        登入
      </button>
      <div class="or-line flex justify-center items-center mb-7.5">
        <p class="px-2 bg-white text-base">或</p>
      </div>
      <NuxtLink
        to="/account/register"
        class="account-btn bg-white border border-highlight"
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
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth
          .loginWith('local', {
            data: {
              userInfo: this.login,
            },
          })
          .then((res) => {
            if (res.data.token) {
              this.$auth.setUser({
                name: 'Joyce',
                age: 22,
              })
              this.$router.push({ path: '/member' })
            } else alert('something went wrong')
          })
          .catch((err) => alert(err))
        return response
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>

<style scoped>
.or-line::before,
.or-line::after {
  content: '';
  @apply block w-20 h-px bg-gray-300;
}
</style>
