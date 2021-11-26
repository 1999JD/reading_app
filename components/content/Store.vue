<template>
  <button v-if="!isCollection" @click="handleAddCollection(book)">
    <span class="sr-only"> 收藏 </span>
    <img src="~/assets/icon/common/store.svg" />
    <slot :note="note" />
  </button>
  <button v-else @click="handleDelCollection(book.bookId)">
    <span class="sr-only"> 取消收藏 </span>
    <img src="~/assets/icon/member/store.svg" />
    <slot :note="note" />
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Store',
  props: {
    book: {
      type: Object,
      default() {
        return {
          bookId: 0,
        }
      },
    },
  },
  computed: {
    isCollection() {
      return this.$store.getters.isCollection(this.book.bookId)
    },
    note() {
      return this.isCollection ? '取消' : '收藏'
    },
  },
  methods: {
    ...mapActions(['handleAddCollection', 'handleDelCollection']),
  },
}
</script>
