<template>
  <div class="pb-21.5">
    <form action="">
      <label class="account-label">
        <span class="account-span">帳號</span>
        <div>
          <input
            class="account-input"
            type="text"
            placeholder="example@mail.com"
          />
        </div>
      </label>
      <label class="account-label">
        <span class="account-span">設定密碼</span>
        <AccountPwdInputWrap v-slot="{ eyeOpen }">
          <input
            v-model="register.settingsPassword"
            class="account-input"
            :type="eyeOpen ? 'text' : 'password'"
            placeholder="至少8位字元、英文字母大小寫與數字"
          />
        </AccountPwdInputWrap>
      </label>
      <div class="mb-8">
        <label class="account-label mb-3">
          <span class="account-span">確認密碼</span>
          <AccountPwdInputWrap v-slot="{ eyeOpen }">
            <input
              v-model="register.confirmPassword"
              class="account-input"
              :type="eyeOpen ? 'text' : 'password'"
              placeholder="至少8位字元、英文字母大小寫與數字"
            />
          </AccountPwdInputWrap>
        </label>
        <ul class="check">
          <li
            v-for="item in pwdConditions"
            :key="item.text"
            :class="[
              item.isVerified ? 'active' : '',
              'check__item flex mb-3 text-gray-accountInput',
            ]"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
      <button class="account-btn" @click.prevent="handleModalOpen">
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
      pwdConditions: [
        {
          text: '長度為 8 - 15 位字元',
          isVerified: false,
        },
        {
          text: '包含英文字母大寫與小寫',
          isVerified: false,
        },
        {
          text: '包含一個數字',
          isVerified: false,
        },
      ],
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

.check__item::before {
  content: '';
  @apply w-4 h-4 mr-1;
}

.check__item.active {
  @apply text-quote;
}
.check__item.active::before {
  @apply bg-center bg-no-repeat bg-cover;

  background-image: url('~/assets/icon/account/check.svg');
}
</style>
