<template>
  <li class="bg-white">
  記得要用 line clamp
    <p>
      {{ remark.name }}
      <span>{{ remark.date }}</span>
    </p>
    <p>
      {{ remark.content }}
    </p>
    <button>瀏覽完整內容</button>
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
