<template>
  <div class="pb-21.5">
    <form action="">
      <AccountAcctInput v-model="register.account" />
      <AccountPwdInput v-model="register.password" field="setPassword">
        <template #label>設定密碼</template>
      </AccountPwdInput>
      <AccountCfmPwdInput v-model="register.settingPassword" class="mb-8" />
      <button class="account__btn" @click.prevent="handleModalOpen">
        確認註冊
      </button>
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
