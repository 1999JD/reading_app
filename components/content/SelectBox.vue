<template>
  <div class="relative">
    <button
      class="
        select__button
        block
        relative
        w-full
        py-2.5
        pl-4
        pr-7
        bg-white
        text-left
        rounded
      "
      @blur="handleButtonBlur"
      @click.prevent="show = !show"
    >
      <p :class="[!hasChosen && 'text-gray-accountInput']">
        {{ hasChosen ? selectValue : placeholder }}
      </p>
      <div class="absolute top-2 right-2 w-5 h-5">
        <img src="~/assets/icon/common/downArrow.svg" alt="" />
      </div>
    </button>
    <ul
      v-show="show"
      class="
        absolute
        top-over
        w-full
        py-2
        px-4
        bg-white
        rounded
        overflow-hidden
      "
    >
      <li
        v-for="(option, index) in options"
        :key="option.label"
        :class="[index !== options.length - 1 && 'border-b border-gray-divide']"
      >
        <label
          :for="option.label"
          class="
            block
            w-full
            px-1
            py-2
            rounded
            cursor-pointer
            hover:bg-highlight hover:text-white
          "
          >{{ option.label }}</label
        >
        <input
          :id="option.label"
          :value="option.input"
          type="radio"
          name="platform"
          class="hidden"
          @click.prevent="handleInputSelect(option.input)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    name: {
      type: String,
      default: 'address',
    },
    placeholder: {
      type: String,
      default: '點擊展開選擇',
    },
    selectValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default() {
        return [
          {
            label: 'codepen',
            input: 'codepen',
          },
          {
            label: 'tailwind',
            input: 'tailwind',
          },
        ]
      },
    },
  },
  data() {
    return {
      show: false,
      hasChosen: false,
    }
  },
  methods: {
    handleInputSelect(value) {
      this.show = false
      this.hasChosen = true
      this.$emit('input', value)
    },
    handleButtonBlur() {
      setTimeout(() => {
        this.show = false
      }, 100)
    },
  },
}
</script>
