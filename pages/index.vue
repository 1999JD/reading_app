<template>
  <main>
    <div class="px-6 py-3 bg-primary">
      <img
        src="~/assets/img/banner.jpg"
        alt="banner"
        class="max-w-full h-auto border"
        width="366"
        height="100"
      />
    </div>
    <IndexNav />
    <div class="flex justify-around bg-gray-mainentries shadow-entries">
      <a
        v-for="entry in mainEntries"
        :key="entry.title"
        href="#"
        class="py-3"
        @click.prevent="show = `IndexCate${entry.name}`"
      >
        {{ entry.title }}
      </a>
    </div>
    <ContentBookSubEntry />
    <component :is="show" />
  </main>
</template>
<script>
export default {
  name: 'Index',
  layout: 'index',
  loading: true,
  async asyncData({ $api }) {
    await $api.apiFake().then((res) => {
      // console.log(res.data)
    })
  },
  data() {
    return {
      mainEntries: [
        { title: '最新', name: 'Latest' },
        { title: '熱門', name: 'Hit' },
        { title: '推薦', name: 'Recommend' },
        { title: '精選', name: 'Featured' },
      ],
      show: 'IndexCateLatest',
    }
  },
}
</script>
