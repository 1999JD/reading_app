<template>
  <li class="mb-6 p-3 bg-white rounded-md shadow-sm ">
    <p class="mb-4">
      {{ remark.name }}
      <span class="inline-block ml-3">{{ remark.date }}</span>
    </p>
    <p class="mb-4 text-xs">
      {{ remark.content }}
    </p>
    <button class="block ml-auto">瀏覽完整內容 ></button>
  </li>
</template>

<script>
export default {
  name: 'Remark',
  props: {
    remark: {
      type: Object,
      default() {
        return {
          id: 0,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        }
      },
    },
  },
}
</script>
