<template>
  <label class="account__input__wrap">
    <AccountInputHelp :is-validated="isValidated">
      *帳號格式錯誤
    </AccountInputHelp>
    <span class="account__label">帳號</span>
    <input
      v-model="userInput"
      class="account__input"
      type="text"
      placeholder="example@mail.com"
      @input="handleInput($event)"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      userInput: '',
      isValidated: true,
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
      this.handleValidate('account')
    },
    async handleValidate(field) {
      this.isValidated = await this.$validate(field, this.userInput)
    },
  },
}
</script>
