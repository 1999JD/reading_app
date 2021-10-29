<template>
  <div class="flex items-center mb-4">
    <div class="w-6 mr-1">
      <img src="~/assets/icon/member/title-tag.svg" alt="" />
    </div>
    <h3 class="text-base font-medium">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'RectiptTitle',
}
</script>
