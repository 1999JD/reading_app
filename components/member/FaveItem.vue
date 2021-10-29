<template>
  <li class="flex relative mb-3">
    <div class="flex-shrink-0 w-24 mr-3">
      <img
        :src="require(`~/assets/img/${faveItem.imgSrc}`)"
        :alt="faveItem.name"
      />
    </div>
    <div
      :class="[index + 1 === arrLength ? '' : 'border-b-2 border-gray-divide']"
    >
      <h3 class="mb-1 text-base font-medium leading-none">
        {{ faveItem.name }}
      </h3>
      <p class="mb-2 line-clamp-3">{{ faveItem.desc }}</p>
      <div class="text-gray-subInfo text-xs">
        <p class="mb-2">作者：{{ faveItem.author }}</p>
        <p class="mb-3">{{ faveItem.publishTime }}出版</p>
      </div>
    </div>
    <div class="flex absolute right-0">
      <div class="w-4 mr-0.5">
        <img src="~/assets/icon/member/store.svg" alt="收藏icon" />
      </div>
      <span class="text-quote whitespace-nowrap">取消</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'FaveItem',
  props: {
    faveItem: {
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
}
</script>
