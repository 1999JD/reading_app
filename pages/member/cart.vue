<template>
  <main class="pt-4 px-6 pb-20">
    <section class="bg-gray-memberbg">
      <div
        class="
          flex
          justify-between
          items-center
          py-3
          px-4
          border-b border-gray-200
        "
      >
        <label>
          <input type="checkbox" class="w-5 h-5 rounded" />
          <span class="font-medium">全選</span>
        </label>
        <button class="mr-2 text-xs">編輯</button>
      </div>
      <ul class="mb-12 px-4 py-3 pb-5">
        <li
          v-for="(item, index) in shoppingList"
          :key="item.bookId"
          :class="[
            index === shoppingList.length - 1 && 'mt-6',
            'flex items-center gap-2',
          ]"
        >
          <input
            type="checkbox"
            name="edit"
            class="flex-grow-0 flex-shrink-0 w-5 h-5 rounded"
          />
          <div class="flex gap-1.5">
            <div class="flex-grow-0 flex-shrink-0 w-13">
              <img :src="require(`~/assets/img/${item.imgSrc}`)" alt="" />
            </div>
            <div>
              <h3 class="mb-1.5 font-medium line-clamp-1">{{ item.name }}</h3>
              <p class="mb-1.5 text-xs">作者：{{ item.author }}</p>
              <p class="text-quote font-medium">${{ item.price }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <nav class="grid grid-cols-2 gap-3.5">
      <NuxtLink
        to="/"
        class="inline-flex justify-center py-2 border border-highlight rounded"
      >
        <div class="w-4">
          <img src="" alt="" />
        </div>
        繼續購物
      </NuxtLink>
      <NuxtLink
        to="member/checkout"
        class="inline-flex justify-center py-2 bg-highlight rounded"
      >
        <div class="w-4">
          <img src="" alt="" />
        </div>
        前往結帳
      </NuxtLink>
    </nav>
  </main>
</template>

<script>
export default {
  name: 'Cart',
  layout: 'member',
  data() {
    return {
      shoppingList: [
        {
          bookId: 0,
          checked: false,
          imgSrc: 'sampleBook.jpg',
          name: '教育情緣 - 回首七十人生教育路回首七十人生',
          author: '吳清基',
          price: 225,
        },
        {
          bookId: 1,
          checked: false,
          imgSrc: 'sampleBook.jpg',
          name: '教育情緣 - 回首七十人生教育路',
          author: '吳清基',
          price: 300,
        },
      ],
    }
  },
}
</script>
