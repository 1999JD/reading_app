<template>
  <div>
    <form @submit.prevent="userRegister">
      <AccountAcctInput v-model="register.account" />
      <AccountPwdInput v-model="register.confirmPassword" field="setPassword">
        <template #label>設定密碼</template>
      </AccountPwdInput>
      <AccountCfmPwdInput v-model="register.settingPassword" class="mb-8" />
      <button class="account__btn" type="submit">確認註冊</button>
    </form>
    <transition name="fade">
      <div v-show="modalOpen">
        <AccountModal @onHandleModalOpen="handleModalOpen" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Register',
  layout: 'account',
  data() {
    return {
      modalOpen: false,
      register: {
        account: '',
        settingPassword: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    async userRegister() {
      if (
        !(await this.$validateFunctions.allFormValidate(
          'register',
          this.register
        ))
      ) {
        alert('格式不對，請檢查後重填')
        return false
      }
      if (this.register.settingPassword !== this.register.confirmPassword) {
        alert('確認密碼與設定密碼不一致，請檢查後重填')
        return false
      }
      // try {
      //   await this.$axios.post('register', {
      //     username: this.username,
      //     email: this.email,
      //     password: this.password,
      //   })
      this.handleModalOpen()
      this.$validateFunctions.userLogin({
        account: this.register.account,
        password: this.register.confirmPassword,
      })
      //   this.$router.push('/')
      // } catch (e) {
      //   this.error = e.response.data.message
      // }
    },
    handleModalOpen() {
      this.modalOpen = !this.modalOpen
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  @apply flex;
}
</style>
