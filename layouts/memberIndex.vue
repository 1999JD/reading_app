<template>
  <div>
    <nuxt />
    <div class="h-18"></div>
    <LayoutFooterNav />
  </div>
</template>

<script>
export default {
  name: 'MemberIndex',
  middleware: 'auth',
}
</script>
