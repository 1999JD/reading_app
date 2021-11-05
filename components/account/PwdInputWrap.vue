<template>
  <div class="relative">
    <slot :eyeOpen="eyeOpen" :testStr="textStr" />
    <button class="account__eye" @click.prevent="handleEyeOpen(eyeOpen)">
      <img
        :src="
          require(`~/assets/icon/account/${
            eyeOpen ? 'eye-open' : 'eye-off'
          }.svg`)
        "
      />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PwdInputWrap',
  data() {
    return {
      eyeOpen: false,
      textStr: 'string',
    }
  },
  methods: {
    handleEyeOpen() {
      this.eyeOpen = !this.eyeOpen
    },
  },
}
</script>
