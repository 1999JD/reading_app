<template>
  <section class="pl-6 whitespace-nowrap overflow-x-scroll shadow-md">
    <div v-if="subEntries.grade" class="flex items-center py-3">
      <h3 class="mr-6 font-medium">{{ subEntries.grade.cate }}</h3>
      <div class="flex">
        <a
          v-for="entry in subEntries.grade.items"
          :key="entry.title"
          href="#"
          class="block mr-4 py-1 px-2"
        >
          {{ entry.title }}
        </a>
      </div>
    </div>
    <div v-if="subEntries.field" class="flex items-center py-3">
      <h3 class="mr-6 font-medium">{{ subEntries.field.cate }}</h3>
      <div class="flex">
        <a
          v-for="entry in subEntries.field.items"
          :key="entry.title"
          href="#"
          class="block mr-4 py-1 px-2"
        >
          {{ entry.title }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SubEntries',
  data() {
    return {
      subEntries: {
        grade: {
          cate: '年級',
          items: [
            { title: '國小', to: './' },
            { title: '國中', to: './' },
            { title: '高中', to: './' },
          ],
        },
        field: {
          cate: '領域',
          items: [
            { title: '全部', to: './' },
            { title: '國文', to: './' },
            { title: '英文', to: './' },
            { title: '數學', to: './' },
            { title: '社會', to: './' },
            { title: '自然科學', to: './' },
          ],
        },
      },
    }
  },
}
</script>
