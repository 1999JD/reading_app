<template>
  <main>
    <div class="flex">
      <button @click="mediaType = 'Audio'">有聲書</button>
      <button @click="mediaType = 'Video'">影片</button>
    </div>
    <component :is="`Content${mediaType}`" />
    <ContentNav />
    <h3>簡介</h3>
    <p>{{ intro }}</p>
    <h3>評論</h3>
    <ContentRemarks />
  </main>
</template>

<script>
export default {
  name: 'Media',
  layout: 'content',
  data() {
    return {
      mediaType: 'Audio',
      intro: '',
    }
  },
}
</script>
