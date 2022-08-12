<template>
  <div class="flex flex-row-reverse gap-2.5 mb-8">
    <div class="w-12 hy-12 rounded-full">
      <img src="~/assets/img/user.png" alt="" />
    </div>
    <p class="py-3.5 px-6 bg-third shadow-md rounded-xl">
      我的答案: {{ answer }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TestUserAnswer',
  props: {
    answer: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
