<template>
  <div>
    <form action="">
      <label class="account-label">
        <span class="account-span">舊密碼</span>
        <AccountPwdInputWrap v-slot="{ eyeOpen }">
          <input
            v-model="reset.oldPassword"
            class="account-input"
            :type="eyeOpen ? 'text' : 'password'"
            placeholder="至少8位字元、英文字母大小寫與數字"
          />
        </AccountPwdInputWrap>
      </label>
      <label class="account-label">
        <span class="account-span">新密碼</span>
        <AccountPwdInputWrap v-slot="{ eyeOpen }">
          <input
            v-model="reset.newPassword"
            class="account-input"
            :type="eyeOpen ? 'text' : 'password'"
            placeholder="至少8位字元、英文字母大小寫與數字"
          />
        </AccountPwdInputWrap>
      </label>
      <label class="account-label mb-12">
        <span class="account-span">確認密碼</span>
        <AccountPwdInputWrap v-slot="{ eyeOpen }">
          <input
            v-model="reset.confirmPassword"
            class="account-input"
            :type="eyeOpen ? 'text' : 'password'"
            placeholder="請再次輸入密碼"
          />
        </AccountPwdInputWrap>
      </label>

      <button class="account-btn">完成</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  layout: 'account',
  data() {
    return {
      reset: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
    }
  },
}
</script>
