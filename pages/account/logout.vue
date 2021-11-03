<template>
  <div>
    <button class="border border-third w-44 mt-4" @click="userLogout">
      登出
    </button>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  layout: 'index',
  methods: {
    async userLogout() {
      await this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>
