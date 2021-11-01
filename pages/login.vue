<template>
  <div>
    <form @submit.prevent="userLogin">
      <label>
        <span>username</span>
        <input v-model="login.username" type="text" />
      </label>
      <label>
        <span>password</span>
        <input v-model="login.password" type="text" />
      </label>
      <div>
        <button
          class="w-20 py-4 text-center border border-third"
          type="submit"
          @click="userLogin"
        >
          submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'index',
  data() {
    return {
      login: {
        username: 'Joyce123',
        password: 'aaaaa ',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth
          .loginWith('local', {
            data: this.login,
          })
          .then((res) => res.data)
        return response
      } catch (err) {
        alert(err)
      }
    },
  },
}
</script>
