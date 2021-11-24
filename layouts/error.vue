<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred {{ error }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'index',
  middleware: [
    function ({ redirect }) {
      return redirect(301, '/')
    },
  ],
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
