<template>
  <li class="mb-6 p-3 bg-white rounded-md shadow-content">
    <div class="mb-4">
      <p class="inline-block mr-3">
        {{ remark.name }}
      </p>
      <p class="inline-block text-xs">
        {{ remark.date }}
      </p>
    </div>
    <p class="mb-4 text-xs line-clamp-2">
      {{ remark.content }}
    </p>
    <button class="block ml-auto text-xs">
      瀏覽完整內容
      <img
        src="~/assets/icon/common/rightArrow.svg"
        alt=""
        class="inline-block w-5 align-middle"
      />
    </button>
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
          content: '評論內容評論內容評論內容評',
        }
      },
    },
  },
}
</script>
