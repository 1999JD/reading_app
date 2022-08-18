<template>
  <section class="pl-6 whitespace-nowrap shadow-md">
    <div v-for="menu in subEntries" :key="menu.cate">
      <div
        :class="[
          $route.name === 'index' ? 'py-3' : 'py-1.5',
          'selectbar__wrap',
        ]"
      >
        <h3 class="selectbar__title">{{ menu.cateCH }}</h3>
        <div class="selectbar__list overflow-x-scroll no-scrollbar">
          <a
            v-for="entry in menu.items"
            :key="entry.title"
            href="#"
            :class="[
              entry.title === conditions[menu.cate] && 'active',
              'selectbar__list__item',
            ]"
            @click.prevent="handleSelect(menu.cate, entry.title)"
          >
            {{ entry.title }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SubEntries',
  data() {
    return {
      subEntries: [
        {
          cate: 'grade',
          cateCH: '休閒',
          items: [
            { title: '輕小說', to: './' },
            { title: '翻譯小說', to: './' },
            { title: '詩集', to: './' },
            { title: '手工', to: './' },
            { title: '漫畫', to: './' },
            { title: '心靈成長', to: './' },
          ],
        },
        {
          cate: 'field',
          cateCH: '專業',
          items: [
            { title: '法律', to: './' },
            { title: '資訊科學', to: './' },
            { title: '英文', to: './' },
            { title: '國考', to: './' },
            { title: '研究所', to: './' },
            { title: '自然科學', to: './' },
          ],
        },
      ],
      conditions: {},
    }
  },
  created() {
    const subEntries = this.subEntries
    const newQuery = { ...this.$route.query }
    for (const element of subEntries) {
      if (!Object.keys(newQuery).includes(element.cate)) {
        // 如果沒有 就塞進去
        newQuery[element.cate] = element.items[0].title
        continue
      }
      // 如果有，進一步檢查值是否正確
      const hasTitle = element.items.findIndex(
        (itemobj) => itemobj.title === newQuery[element.cate]
      )
      if (hasTitle === -1)
        // 如果沒有這個值，就塞進去
        newQuery[element.cate] = element.items[0].title
    }
    for (const queryKey of Object.keys(newQuery)) {
      const hasKey = subEntries.findIndex((element) => {
        return element.cate === queryKey
      })
      if (hasKey === -1) delete newQuery[queryKey]
    }
    this.$router
      .replace({ query: newQuery })
      .then(() => {
        this.conditions = newQuery
      })
      .catch(() => {
        this.conditions = newQuery
      })
  },
  methods: {
    handleSelect(cate, item) {
      if (this.conditions[cate] !== item) this.conditions[cate] = item
      this.$router.replace({ query: { ...this.conditions } })
    },
  },
}
</script>

<style scoped>
.selectbar__wrap {
  @apply flex items-center;
}
.selectbar__title {
  @apply mr-6 font-medium;
}
.selectbar__list {
  @apply flex flex-grow;
}
.selectbar__list__item {
  @apply flex-shrink-0 block mr-4 py-1 px-2.5 text-center rounded-xl;
}
.active {
  @apply bg-yellow;
}
</style>
