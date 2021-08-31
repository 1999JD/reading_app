<template>
  <main>
    <div class="px-6 py-3 bg-primary">
      <img
        src=""
        alt="banner"
        class="max-w-full h-auto border"
        width="366"
        height="100"
      />
    </div>
    <ul class="flex justify-evenly pt-3 py-6 px-6 bg-primary">
      <li v-for="nav in navs" :key="nav.title">
        <IndexIconWithText :src="nav.src" :alt="nav.alt" :to="nav.to">
          {{ nav.title }}
        </IndexIconWithText>
      </li>
    </ul>
    <div class="flex justify-around py-3 bg-gray-mainentries shadow-md">
      <a
        v-for="entry in mainEntries"
        :key="entry.title"
        href="#"
        class="pb-1"
      >
        {{ entry.title }}
      </a>
    </div>
    <section class="pl-6 whitespace-nowrap overflow-x-scroll shadow-md">
      <div v-if="subEntries[0]" class="flex py-4">
        <h3 class="mr-6 font-medium">{{ subEntries[0].cate }}</h3>
        <div class="flex">
          <a v-for="entry in subEntries[0].items" :key="entry.title" href="#" class="block mr-4 py-1 px-2">
            {{ entry.title }}
          </a>
        </div>
      </div>
      <div v-if="subEntries[1]" class="flex py-4">
        <h3 class="mr-6 font-medium">{{ subEntries[1].cate }}</h3>
        <div class="flex">
          <a v-for="entry in subEntries[1].items" :key="entry.title" href="#" class="block mr-4 py-1 px-2">
            {{ entry.title }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      navs: [
        { title: '素養說書', to: './', src: '~', alt: '' },
        { title: '線下活動', to: './', src: '~', alt: '' },
        { title: 'TKB書城', to: './', src: '~', alt: '' },
        { title: '我要測驗', to: './', src: '~', alt: '' },
        { title: '每日簽到', to: './', src: '~', alt: '' },
      ],
      mainEntries: [
        { title: '最新', to: './' },
        { title: '熱門', to: './' },
        { title: '推薦', to: './' },
        { title: '精選', to: './' },
      ],
      subEntries: [
        {
          cate: '年級',
          items: [
            { title: '國小', to: './' },
            { title: '國中', to: './' },
            { title: '高中', to: './' },
          ],
        },
        {
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
      ],
    }
  },
}
</script>
