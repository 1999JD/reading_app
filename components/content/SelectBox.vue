<template>
  <div class="relative">
    <button
      class="
        block
        relative
        w-full
        py-2.5
        pl-4
        pr-7
        bg-white
        text-left
        border border-gray-300
        rounded
      "
      @click.prevent="handleClickButton"
    >
      <p :class="[!hasChosen && 'text-gray-500', 'element']">
        {{ hasChosen ? selectValue : placeholder }}
      </p>
      <div class="absolute top-2 right-2 w-5 h-5">
        <img src="~/assets/icon/common/downArrow.svg" class="element" alt="" />
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
        shadow-sm
        overflow-hidden
      "
    >
      <li
        v-for="(option, index) in options"
        :key="option.label"
        :class="[index !== options.length - 1 && ' border-b ']"
      >
        <label
          :for="option.label"
          class="
            element
            block
            w-full
            px-1
            py-2
            rounded
            cursor-pointer
            hover:bg-yellow hover:text-white
          "
          >{{ option.label }}</label
        >
        <input
          :id="option.label"
          :value="option.input"
          type="radio"
          name="platform"
          class="hidden"
          @click.prevent="handleInputSelect(option.label)"
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
        return []
      },
    },
  },
  data() {
    return {
      show: false,
      hasChosen: false,
      focus: false,
    }
  },
  mounted() {
    document.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('element')) return
      this.show = false
    })
  },
  methods: {
    handleInputSelect(value) {
      this.$emit('input', value)
      this.show = false
      this.hasChosen = true
    },
    handleClickButton() {
      this.show = !this.show
    },
  },
}
</script>
