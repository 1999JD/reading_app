<template>
  <div class="mx-6">
    <button class="block ml-auto mb-3">
      <img :src="require('~/assets/icon/pen.svg')" class="inline-block" /> 留言
    </button>
    <ul>
      <ContentRemark v-for="remark in remarks" :key="remark.id" />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Remarks',
  data() {
    return {
      remarks: [
        {
          id: 0,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 1,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 2,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 3,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 4,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
        {
          id: 5,
          name: '王小一',
          date: '2021-06-22',
          content:
            '評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容評論內容......',
        },
      ],
    }
  },
}
</script>
