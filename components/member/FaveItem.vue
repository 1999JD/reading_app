<template>
  <li class="flex relative">
    <div class="w-20 h-24 mr-6 bg-gray-300">
      <img :src="require(`~/assets/icon/home.svg`)" :alt="faveItem.name" />
    </div>
    <div>
      <h3>{{ faveItem.name }}</h3>
      <p>{{ faveItem.desc }}</p>
      <div>
        <p>作者：{{ faveItem.author }}</p>
        <p>{{ faveItem.publishTime }}出版</p>
      </div>
    </div>
    <div class="absoulte">
      <img src="" alt="" />
      <span>收藏</span>
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
  },
}
</script>
