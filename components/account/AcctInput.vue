<template>
  <label class="account__input__wrap">
    <span class="account__input__help">
      {{ errorMessage }}
    </span>
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
      errorMessage: '',
    }
  },
  methods: {
    async handleInput(event) {
      this.$emit('input', event.target.value)
      this.errorMessage = await this.$validateFunctions.inputValidate(
        'account',
        this.userInput
      )
    },
  },
}
</script>
