<template>
  <div class="flex items-center mb-4">
    <div class="w-6">
      <img src="~/assets/icon/store-tag.svg" alt="" />
    </div>
    <h3>
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'RectiptTitle',
}
</script>
