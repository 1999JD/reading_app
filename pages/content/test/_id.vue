<template>
  <main>
    <p class="mb-5 p-0.5 bg-primary-dark text-center text-white text-base">
      {{ currentQuestion.toString() }}/{{ totalQuestion.toString() }}
    </p>
    <section class="mx-6">
      <ContentTestQuestion />
      <ContentTestUserAnswer />
      <ContentTestEndBubble />
    </section>
  </main>
</template>

<script>
export default {
  name: 'Test',
  layout: 'content',
  data() {
    return {
      totalQuestion: 10,
      currentQuestion: 0,
    }
  },
}
</script>

<style scoped>
.result-visulation {
  /* background-image: url('~/assets/image/bg-star'); */
}
</style>
