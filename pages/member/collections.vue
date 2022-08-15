<template>
  <main class="mt-8 mx-6">
    <ul>
      <MemberCollection
        v-for="(collection, index) in collections"
        :key="collection.id"
        :collection="collection"
        :index="index"
        :arr-length="collections.length"
      />
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Favorites',
  computed: {
    collections() {
      return this.$store.state.collections
    },
  },
}
</script>
