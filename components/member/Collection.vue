<template>
  <li class="flex relative mb-3">
    <div class="flex-shrink-0 w-24 mr-3">
      <img
        :src="require(`~/assets/img/${collection.imgSrc}`)"
        :alt="collection.name"
        @click="$router.push(`/content/media/${collection.bookId}`)"
      />
    </div>
    <div
      :class="[
        index + 1 === arrLength ? '' : 'border-b-2 border-gray-divide',
        'flex-grow',
      ]"
    >
      <h3 class="mb-1 text-base font-medium leading-none">
        {{ collection.name }}
      </h3>
      <p class="min-h-12 mb-2 line-clamp-3">{{ collection.desc }}</p>
      <div class="text-gray-subInfo text-xs">
        <p class="mb-2">作者：{{ collection.author }}</p>
        <p class="mb-3">{{ collection.publishTime }}出版</p>
      </div>
    </div>
    <div
      class="flex absolute right-0"
      @click="handleDelCollection(collection.bookId)"
    >
      <div class="w-4 mr-0.5">
        <img src="~/assets/icon/member/store.svg" alt="收藏icon" />
      </div>
      <span class="text-quote whitespace-nowrap">取消</span>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Collection',
  props: {
    collection: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
    arrLength: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapActions(['handleDelCollection']),
  },
}
</script>
