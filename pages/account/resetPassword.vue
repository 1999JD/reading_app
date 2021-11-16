<template>
  <div>
    <form action="">
      <AccountPwdInput v-model="reset.oldPassword" field="password">
        <template #label> 舊密碼</template>
      </AccountPwdInput>
      <AccountPwdInput v-model="reset.newPassword" field="setPassword">
        <template #label> 新密碼</template>
      </AccountPwdInput>
      <AccountPwdInput v-model="reset.cfmPassword" class="mb-10" field="setPassword">
        <template #label> 確認密碼</template>
      </AccountPwdInput>
      <button class="account__btn">完成</button>
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
        cfmPassword: '',
      },
    }
  },
}
</script>
