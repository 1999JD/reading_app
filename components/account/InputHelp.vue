<template>
  <span :class="[isValidated && 'hidden', 'account__input__help']">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'InputHelp',
  props: {
    isValidated: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
