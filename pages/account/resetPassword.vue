<template>
  <div>
    <form @submit.prevent="userResetPassword">
      <AccountPwdInput v-model="reset.oldPassword" field="password">
        <template #label> 舊密碼</template>
      </AccountPwdInput>
      <AccountPwdInput v-model="reset.newPassword" field="setPassword">
        <template #label> 新密碼</template>
      </AccountPwdInput>
      <AccountPwdInput
        v-model="reset.cfmPassword"
        class="mb-10"
        field="setPassword"
      >
        <template #label> 確認密碼</template>
      </AccountPwdInput>
      <button class="account__btn" type="submit">完成</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  layout: 'account',
  middleware: 'auth',
  data() {
    return {
      reset: {
        oldPassword: '',
        newPassword: '',
        cfmPassword: '',
      },
    }
  },
  methods: {
    async userResetPassword() {
      if (
        !(await this.$validateFunctions.allFormValidate('reset', this.reset))
      ) {
        alert('格式不對，請檢查後重填')
        return false
      }
      if (this.reset.newPassword !== this.reset.cfmPassword) {
        alert('新密碼與確認密碼不同')
        return false
      }
      alert('成功更換密碼')
    },
  },
}
</script>
