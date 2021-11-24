<template>
  <label class="account__input__wrap mb-4">
    <span class="account__label"><slot name="label">密碼</slot></span>
    <div class="relative">
      <button class="account__eye" @click.prevent="handleEyeOpen(eyeOpen)">
        <img
          :src="
            require(`~/assets/icon/account/${
              eyeOpen ? 'eye-open' : 'eye-off'
            }.svg`)
          "
        />
      </button>
      <input
        v-model="userInput"
        class="account__input"
        :type="eyeOpen ? 'text' : 'password'"
        placeholder="至少8位字元、英文字母大小寫與數字"
        @input="handleInput($event)"
      />
    </div>
    <span class="account__input__help">
      {{ errorMessage }}
    </span>
  </label>
</template>

<script>
export default {
  name: 'PwdInputWrap',
  props: {
    field: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      eyeOpen: false,
      userInput: '',
      errorMessage: '',
    }
  },
  methods: {
    handleEyeOpen() {
      this.eyeOpen = !this.eyeOpen
    },
    async handleInput(event) {
      this.$emit('input', event.target.value)
      this.errorMessage = await this.$validateFunctions.inputValidate(
        this.field,
        this.userInput
      )
    },
  },
}
</script>
