<template>
  <div>
    <label class="account__input__wrap mb-4">
      <span class="account__label">確認密碼</span>
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
          placeholder="請再次輸入密碼"
          @input="handleInput($event)"
        />
      </div>
    </label>
    <ul class="check">
      <li
        v-for="item in pwdConditions"
        :key="item.text"
        :class="[
          item.isValidated ? 'active' : '',
          'check__item flex items-center mb-3 text-gray-accountInput',
        ]"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
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
      pwdConditions: [
        {
          text: '長度為 8 - 15 位字元',
          conditionName: 'length',
          isValidated: false,
        },
        {
          text: '包含英文字母大寫與小寫',
          conditionName: 'case',
          isValidated: false,
        },
        {
          text: '包含一個數字',
          conditionName: 'hasNumber',
          isValidated: false,
        },
      ],
    }
  },
  methods: {
    handleEyeOpen() {
      this.eyeOpen = !this.eyeOpen
    },
    handleInput(event) {
      this.$emit('input', event.target.value)
      this.handleMulValidate(this.field)
    },
    async handleMulValidate() {
      const invalidations = await this.$validateFunctions.mulPwdVal(
        this.userInput
      )
      this.pwdConditions.forEach((element) => {
        if (invalidations.includes(element.conditionName)) {
          element.isValidated = false
        } else element.isValidated = true
      })
    },
  },
}
</script>

<style scoped>
.check__item::before {
  content: '';
  background-image: url('~/assets/icon/account/times.svg');
  filter: invert(82%) sepia(11%) saturate(18%) hue-rotate(335deg)
    brightness(89%) contrast(90%);
  @apply w-2 h-2 ml-1 mr-2 bg-center bg-no-repeat bg-cover;
}

.check__item.active {
  @apply text-tangerine;
}
.check__item.active::before {
  background-image: url('~/assets/icon/account/check.svg');
  filter: unset;
  @apply w-4 h-4 ml-0 mr-1;
}
</style>
