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
    <AccountInputHelp :is-validated="isValidated">
      *此欄位不得為空
    </AccountInputHelp>
  </label>
</template>

<script>
export default {
  name: 'PwdInputWrap',
  props: {
    field: {
      type: String,
      default: 'password',
    },
  },
  data() {
    return {
      eyeOpen: false,
      userInput: '',
      isValidated: true,
    }
  },
  methods: {
    handleEyeOpen() {
      this.eyeOpen = !this.eyeOpen
    },
    handleInput(event) {
      this.$emit('input', event.target.value)
      this.handleValidate(this.field)
    },
    async handleValidate(field) {
      this.isValidated = await this.$validate(field, this.userInput)
    },
  },
}
</script>
