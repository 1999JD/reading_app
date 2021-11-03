<template>
  <div>
    <form action="">
      <label class="account-label">
        <span class="account-span">修改密碼</span>
        <div class="relative">
          <input class="account-input" type="password" /><button
            class="absolute"
          >
            <img src="" alt="" />
          </button>
        </div>
      </label>
      <label class="account-label mb-12">
        <span class="account-span"> 確認密碼 </span>
        <div class="relative">
          <input class="account-input" type="password" />
          <button class="absolute"><img src="" alt="" /></button>
        </div>
      </label>
      <button class="account-btn">完成</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  layout: 'account',
}
</script>
